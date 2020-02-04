class CreateFriendships < ActiveRecord::Migration[5.2]
  def change
    create_table :friendships do |t|
      t.integer :user_id, null: false
      t.integer :friends_with_user_id, null: false 
      t.timestamps
    end
    add_index :friendships, :user_id, unique: true
    add_index :friendships, :friends_with_user_id, unique: true 
  end
end
