class LocationsController < ApplicationController
  def index
    @locations = Location.all
  end

  def new
    @location = Location.new
  end

  def show
    @location = Location.find(params[:id])
  end

  def edit
    @location = Location.find(params[:id])
  end

  def update
    @location = Location.find(params[:id])
    if @location.update(location_params)
      flash[:success] = 'Location was successfully updated.'
      redirect_to @location
    else
      flash.now[:fail] = @location.errors.full_messages.join(", ")
      render :edit
    end
  end

  private

  def location_params
    params.require(:location).permit(:name, :address, :city, :state, :zip)
  end
end
