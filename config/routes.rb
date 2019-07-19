Rails.application.routes.draw do
  root 'locations#index'
  devise_for :users
  resources :locations, only: [:index, :new, :show]
    resources :reviews, only: [:new]

  namespace :api do
    namespace :v1 do
      resources :locations, only: [:show, :create, :index]
    end
  end
end
