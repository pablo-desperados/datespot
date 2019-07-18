class Api::V1::LocationsController < ApplicationController

  def show
    @location = Location.find(params["id"])
    render json: @location
  end

end
