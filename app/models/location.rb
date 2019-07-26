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

  def self.findusers(reviews)
    completed_hash = reviews.map do |review|
      user = User.find(review.user_id)
        user
    end
     completed_hash
  end

  def self.combine(reviews, users)
    reviews_arr = Array(reviews)
    users_arr = Array(users)
    combined_arr = []
    reviews_arr.zip(users_arr).each do |review, user|
      combined_arr << {review: review, user: user}
    end
     combined_arr
  end
end
