Rails.application.routes.draw do
  root 'locations#index'

  devise_for :users

  resources :locations, only: [:index, :new, :show, :create, :edit, :update]

  namespace :api do
    namespace :v1 do
      resources :locations, only: [:show, :create, :index, :update, :destroy] do
        resources :reviews, only: [:create]
        resources :ratings, only: [:create]
      end
    end
  end
end
