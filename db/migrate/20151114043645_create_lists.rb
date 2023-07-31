class CreateLists < ActiveRecord::Migration[7.0]
  def change
    create_table :lists do |t|
      t.integer :owner_id, null: false
      t.timestamps null: false
    end
    add_index :lists, :owner_id
  end
end
