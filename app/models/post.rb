class Post < ApplicationRecord
    validates :body, :author_id, :for_user_id, presence: true

    belongs_to :author, 
        primary_key: :id,
        foreign_key: :author_id,
        class_name: 'User'

    belongs_to :recipient,
        primary_key: :id,
        foreign_key: :for_user_id,
        class_name: 'User'
end 