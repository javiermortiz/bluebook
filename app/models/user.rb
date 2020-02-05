class User < ApplicationRecord 
    validates :email, :password_digest, :session_token, :first_name, :surname, :birthday, :gender, presence: true
    validates :email, uniqueness: true 
    validates :password, length: { minimum: 6, allow_nil: true }

    has_one_attached :profile_pic
    has_one_attached :cover_pic

    has_many :initiated_requests,
        class_name: 'FriendshipRequest',
        primary_key: :id,
        foreign_key: :started_by_user_id

    has_many :requests_to_approve,
        class_name: 'FriendshipRequest',
        primary_key: :id,
        foreign_key: :waiting_for_user_id
        
    has_many :initiated_requests_with,
        through: :initiated_requests,
        source: :friendship_validator

    has_many :requests_to_approve_from,
        through: :requests_to_approve,
        source: :friendship_initiator

    has_many :friendships,
        class_name: 'Friendship',
        primary_key: :id,
        foreign_key: :user_id 

    has_many :friendships_repeated,
        class_name: 'Friendship',
        primary_key: :id,
        foreign_key: :friends_with_user_id

    has_many :friends,
        through: :friendships,
        source: :other_friend
    
    has_many :authored_posts,
        primary_key: :id,
        foreign_key: :author_id,
        class_name: 'Post'

    has_many :received_posts,
        primary_key: :id,
        foreign_key: :for_user_id,
        class_name: 'Post'

    attr_reader :password

    after_initialize :ensure_session_token 
    
    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        return nil unless user && user.is_password?(password)
        user
    end 

    def self.generate_session_token
        SecureRandom.urlsafe_base64(16)
    end 

    def reset_session_token
        self.session_token = User.generate_session_token
        self.save!
        self.session_token
    end 

    def is_password?(password)
        bcrypt_password_digest = BCrypt::Password.new(self.password_digest)
        bcrypt_password_digest.is_password?(password)
    end 

    def password=(password)
        @password = password 
        self.password_digest = BCrypt::Password.create(password)
    end 

    private
    def ensure_session_token
        self.session_token ||= User.generate_session_token
    end 
end 