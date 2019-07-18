class LocationsController < ApplicationController
  def new
    @review = Review.new
  end
end
