class RemoveIndex < ActiveRecord::Migration[5.2]
  def change
    remove_index :friendships, :user_id
    remove_index :friendships, :friends_with_user_id
    remove_index :friendship_requests, :started_by_user_id
    remove_index :friendship_requests, :waiting_for_user_id
  end
end
