class ReviewsController < ApplicationController
  def new
    @review = Review.new
  end
end
