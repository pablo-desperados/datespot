class Location < ApplicationRecord
  validates_presence_of :name, :address, :city, :state, :zip, :rating

  has_many :reviews
  belongs_to :user

  mount_uploader :location_picture, LocationPictureUploader

  def self.findusers(reviews)
    completed_hash = []
    reviews.each do |review|
      user = User.find(review.user_id)
      completed_hash << user
    end
    return completed_hash
  end

  def self.combine(reviews, users)
    reviews_arr = Array(reviews)
    users_arr = Array(users)
    combined_arr = []
    reviews_arr.zip(users_arr).each do |review, user|
      combined_arr << {review: review, user: user}
    end
    return combined_arr
  end
end
