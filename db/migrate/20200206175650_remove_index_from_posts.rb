class RemoveIndexFromPosts < ActiveRecord::Migration[5.2]
  def change
    remove_index :posts, :author_id
    remove_index :posts, :for_user_id
  end
end
