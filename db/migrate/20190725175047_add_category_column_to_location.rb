class AddCategoryColumnToLocation < ActiveRecord::Migration[5.2]
  def change
    add_column :locations, :category, :string, null: false
  end
end
