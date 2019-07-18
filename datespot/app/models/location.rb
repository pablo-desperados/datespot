class Location < ApplicationRecord
  validates_presence_of :name, :address, :city, :state, :zip

  belongs_to :user
end
