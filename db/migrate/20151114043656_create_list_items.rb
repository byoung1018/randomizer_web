class CreateListItems < ActiveRecord::Migration
  def change
    create_table :list_items do |t|
      t.integer :list_id, null: false
      t.integer :choice_id, null: false
      t.timestamps null: false
    end
    add_index :list_items, :list_id
    add_index :list_items, :choice_id 
  end
end
