class AddReviewsTable < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.string :title, null: false
      t.string :body, null: false

      t.belongs_to :user, null: false
      t.belongs_to :location, null: false
      t.timestamps null: false
    end
  end
end
