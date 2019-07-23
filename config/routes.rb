Rails.application.routes.draw do
  root 'locations#index'
  devise_for :users
  resources :locations, only: [:index, :new, :show] do
    resources :reviews, only: []
  end

  namespace :api do
    namespace :v1 do
      resources :locations, only: [:show, :create, :index, :update]
    end
  end
end
