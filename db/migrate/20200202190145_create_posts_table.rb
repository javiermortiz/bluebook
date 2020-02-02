class CreatePostsTable < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.string :body, null: false
      t.integer :author_id, null: false 
      t.integer :for_user_id, null: false 
    end
    add_index :posts, :author_id, unique: true 
    add_index :posts, :for_user_id, unique: true 
  end
end
