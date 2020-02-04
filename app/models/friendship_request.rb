class FriendshipRequest < ApplicationRecord
    validates :status, :started_by_user_id, :waiting_for_user_id, presence: true

    belongs_to :friendship_initiator,
        class_name: 'User',
        primary_key: :id,
        foreign_key: :started_by_user_id

    belongs_to :friendship_validator,
        class_name: 'User',
        primary_key: :id,
        foreign_key: :waiting_for_user_id
end 