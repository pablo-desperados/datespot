class Api::V1::LocationsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  before_action :authenticate_user, except: [:index, :show]

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

  def destroy
    Location.find(params["id"]).destroy
    locations = Location.all
    render json: locations
  end

  def update
    location_to_update = Location.find(params[:id])
    new_rating = params[:_json]
    location_to_update.rating += new_rating.to_i
    if location_to_update.save
      render json: { location: location_to_update}
    end
  end

  private

  def location_params
    params.require(:location).permit(:name, :address, :city, :state, :zip, :user_id)
  end

  def authenticate_user
    if !user_signed_in?
      flash[:notice] = "You do not have access to this page."
      redirect_to new_user_registration_path
    end
  end
end
