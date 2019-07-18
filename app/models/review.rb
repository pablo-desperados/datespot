class Review < ApplicationRecord
  validates_presence_of :title, :body, :user_id, :location_id

  belongs_to :location
  belongs_to :user
end
