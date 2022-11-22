class AddProfilePicToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :profile_pic, :string, :default => "app/assets/images/bc75882d906b263fbe0550fe59dc7b21.jpeg"
  end
end
