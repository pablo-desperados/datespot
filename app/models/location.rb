class Location < ApplicationRecord

  CATEGORIES = [
    "Adventure",
    "Casual",
    "Fun",
    "Outdoors",
    "Relaxing",
    "Romantic"
  ]

  validates_presence_of :name, :address, :city, :state, :zip, :rating
  validates :category,
    presence: true,
    inclusion: { in: CATEGORIES }

  has_many :reviews
  has_many :ratings
  has_many :users, through: :ratings

  belongs_to :user

  mount_uploader :location_picture, LocationPictureUploader

end
