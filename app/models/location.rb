class Location < ApplicationRecord
  validates_presence_of :name, :address, :city, :state, :zip, :rating

  has_many :reviews
  belongs_to :user
end
