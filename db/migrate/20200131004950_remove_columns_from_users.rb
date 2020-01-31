class RemoveColumnsFromUsers < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :profile_pic
    remove_column :users, :cover_pic
  end
end
