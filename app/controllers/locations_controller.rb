class LocationsController < ApplicationController
  before_action :authenticate_user, except: [:index, :show]

  def new
    @location = Location.new
  end

  def create
    @location = Location.new(location_params)
    @location.user = current_user

    if @location.save
      redirect_to @location, notice: "New Location Added"
    else
      render :new
    end

  end

  private

  def location_params
    params.require(:location).permit(:name, :address, :city, :state, :zip, :user_id)
  end

  def authenticate_user
    if !user_signed_in? || current_user.admin?
      flash[:notice] = "You do not have access to this page."
      redirect_to new_user_registration_path
    end
  end

end
