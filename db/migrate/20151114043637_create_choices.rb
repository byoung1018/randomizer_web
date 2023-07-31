class CreateChoices < ActiveRecord::Migration[7.0]
  def change
    create_table :choices do |t|
      t.integer :owner_id, null: false
      t.timestamps null: false
    end
    add_index :choices, :owner_id
  end
end
