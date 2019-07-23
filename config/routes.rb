Rails.application.routes.draw do
  devise_for :users
  resources :locations, only: [:index, :new, :show]


  namespace :api do
    namespace :v1 do
      resources :locations, only: [:show, :create, :index] do
        resources :reviews, only: [:create]
      end
    end
  end
  root 'locations#index'
end
