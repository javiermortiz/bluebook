class Friendship < ApplicationRecord
    validates :user_id, :friends_with_user_id, presence: true

    belongs_to :friend,
        class_name: 'User',
        primary_key: :id,
        foreign_key: :user_id 

    belongs_to :other_friend,
        class_name: 'User',
        primary_key: :id,
        foreign_key: :friends_with_user_id

end 