class CreateTableFriendshipRequests < ActiveRecord::Migration[5.2]
  def change
    create_table :friendship_requests do |t|
      t.string :status, null: false
      t.integer :started_by_user_id, null: false 
      t.integer :waiting_for_user_id, null: false 
    end
    add_index :friendship_requests, :started_by_user_id, unique: true 
    add_index :friendship_requests, :waiting_for_user_id, unique: true 
  end
end
