class CreatePrompts < ActiveRecord::Migration[5.2]
  def change
    create_table :prompts do |t|
      t.string :title, null: false
      t.string :body, null: false

      t.timestamps null: false
    end
  end
end
