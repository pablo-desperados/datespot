class LocationsController < ApplicationController
  before_action :authenticate_user, except: [:index, :show]

  def new
    @location = Location.new
    @category_collection = Location::CATEGORIES
  end

  def create
    @location = Location.new(location_params)
    @location.user = current_user

    if @location.save
      redirect_to @location, notice: "New Location Added"
    else
      @category_collection = Location::CATEGORIES
      render :new
    end
  end

  def edit
    @location = Location.find(params[:id])
    @category_collection = Location::CATEGORIES
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
    params.require(:location).permit(
      :name,
      :address,
      :city,
      :state,
      :zip,
      :user_id,
      :location_picture,
      :category)
  end

  def authenticate_user
    if !user_signed_in? || current_user.admin?
      flash[:notice] = "You do not have access to this page."
      redirect_to new_user_registration_path
    end
  end
end
