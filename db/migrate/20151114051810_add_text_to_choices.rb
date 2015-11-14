class AddTextToChoices < ActiveRecord::Migration
  def change
    add_column :choices, :text, :string
  end
end
