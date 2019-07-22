class Api::V1::ReviewsController < ApiController

  def create
    review = Review.new(review_params)
    review.location_id = params[:location_id]
    review.user_id = current_user.id
    if review.save
      render json: review
    end
  end

  private

  def review_params
    params.require(:review).permit(:title, :body, :location_id)
  end

end
