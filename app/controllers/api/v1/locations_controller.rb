class Api::V1::LocationsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }
  before_action :authenticate_user!, except: [:index, :show]

  def show
    location = Location.find(params["id"])
    render json: location
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