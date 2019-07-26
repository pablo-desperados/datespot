class Rating < ApplicationRecord
  belongs_to :user
  belongs_to :location

  validates :user_id, presence: true
  validates :location_id, presence: true

  validates :rating, presence: true, numericality: true
end
