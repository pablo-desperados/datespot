class AddPicToLocation < ActiveRecord::Migration[5.2]
  def change
    add_column :locations, :location_picture, :string, null: false, default: ""
  end
end
