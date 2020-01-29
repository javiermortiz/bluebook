class AddColumnsBirthdayGenderToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :birthday, :string
    add_column :users, :gender, :string
  end
end
