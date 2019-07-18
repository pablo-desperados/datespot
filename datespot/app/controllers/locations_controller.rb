class LocationsController < ApplicationController
  def index
    @locations = Location.all
  end

  def show
    @locations = Location.find(params[:id])
  end
  
end
