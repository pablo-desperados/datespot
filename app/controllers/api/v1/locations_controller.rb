class Api::V1::LocationsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }
  before_action :authenticate_user!, except: [:index, :show]

  def index
    locations = Location.all
    render json: locations
  end

  def show
    location = Location.find(params["id"])
    reviews = location.reviews
    payload = {"location":location, "reviews": reviews}
    render json: payload
  end

  def create
    location = Location.new(location_params)
    location.user = current_user
    if location.save
      render json: { location: location }
    else
      render json: { error: location.errors.full_messages }
    end
  end

  private

  def location_params
    params.require(:location).permit(:name, :address, :city, :state, :zip, :user_id)
  end
end
