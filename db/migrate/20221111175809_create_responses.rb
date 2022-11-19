class CreateResponses < ActiveRecord::Migration[5.2]
  def change
    create_table :responses do |t|
      t.text :body, null: false
      t.string :section, null: false

      t.belongs_to :user, null: false
      t.belongs_to :prompt, null: false

      t.timestamps null: false
    end
  end
end
