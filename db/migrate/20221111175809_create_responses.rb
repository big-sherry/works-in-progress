class CreateResponses < ActiveRecord::Migration[5.2]
  def change
    create_table :responses do |t|
      t.string :title
      t.text :body, null: false

      t.belongs_to :user, null: false
      t.belongs_to :prompt, null: false
    end
  end
end
