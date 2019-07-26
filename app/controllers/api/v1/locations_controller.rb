class Api::V1::LocationsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  before_action :authenticate_user, except: [:index, :show]

  def index
    locations = Location.all
    render json: locations
  end

  def show
    location = Location.find(params["id"])
    all_reviews = location.reviews
    all_users = Location.findusers(all_reviews)
    combined_arr = Location.combine(all_reviews, all_users)
    payload = {"location":location, "reviews": combined_arr}
    render json: payload
  end

  def destroy
    location = Location.find(params["id"])

    if current_user.id == location.user_id
      location.destroy
      locations = Location.all
      render json: locations
    else
      render json: {location: location, error_message: 'You are not authorized to delete this DateSpot!'}
    end
  end

  def update
    location_to_update = Location.find(params[:id])
    new_rating = params[:_json]
    location_to_update.rating += new_rating.to_i
    if location_to_update.save
      render json: { location: location_to_update }
    end
  end

  private

  def location_params
    params.require(:location).permit(:name, :address, :city, :state, :zip, :user_id)
  end

  def authenticate_user
    if !user_signed_in?
      render json: {message: "You do not have access to this page."}, status: 403
    end
  end
end
