class Api::V1::LocationsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }
  before_action :authenticate_user!, except: [:index, :show]

  def create
    location = Location.new(location_params)
    location.user = current_user
    if location.save
      render json: { location: location }
      # redirect_to locations_path
    else
      render json: { error: location.errors.full_messages }
    end
  end

  private

  def location_params
    params.require(:location).permit(:name, :address, :city, :state, :zip, :user_id)
  end
end

#   name: params[:name],
#   address: params[:address],
#   city: params[:city],
#   state: params[:state],
#   zip: params[:zip],
#   user: User.find(params[:user_id])
# )

# data = JSON.parse(request.body.read)
# new_location = Location.create(
#   name: data["name"],
#   address: data["address"],
#   city: data["city"],
#   state: data["state"],
#   zip: data["zip"],
#   user: User.find(data["user_id"])
#   )
#
# render json: new_location
