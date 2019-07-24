class AddRatingColumnToLocations < ActiveRecord::Migration[5.2]
  def change
    add_column :locations, :rating, :integer, default: 0
  end
end
