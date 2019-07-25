class Api::V1::RatingsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  before_action :authenticate_user, only: [:update]

  def create
    location_to_update = Location.find(params[:location_id])
    new_rating = params[:_json]

    submit_rating = Rating.new(
      user: current_user,
      location: location_to_update,
      rating: new_rating)

    record = Rating.where(
      user_id: current_user.id,
      location_id: location_to_update.id,
      rating: new_rating).exists?

    if record == true
      render json: { error_message: "You have already voted for this location!", location: location_to_update }
    else
      submit_rating.save
      location_to_update.rating += new_rating.to_i
      location_to_update.save
      render json: { location: location_to_update, error_message: "" }
    end
  end

  private

  def authenticate_user
    if !user_signed_in?
      flash[:notice] = "You do not have access to this page."
      redirect_to new_user_registration_path
    end
  end
end
