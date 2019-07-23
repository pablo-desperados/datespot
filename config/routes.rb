Rails.application.routes.draw do
  root 'locations#index'
  devise_for :users
  resources :locations, only: [:index, :new, :show, :edit, :update]

  namespace :api do
    namespace :v1 do
      resources :locations, only: [:show, :create, :index, :destroy]
    end
  end
end
