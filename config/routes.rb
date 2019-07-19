Rails.application.routes.draw do
  root 'locations#index'
  devise_for :users
<<<<<<< HEAD
  resources :locations, only: [:index, :new, :show]
    resources :reviews, only: [:new]
=======
  resources :locations, only: [:index, :new, :show] do
    resources :reviews, only: []
  end
>>>>>>> 07330946fddefdfe927fd8ccc74f7db1c6a67ea8

  namespace :api do
    namespace :v1 do
      resources :locations, only: [:show, :create, :index]
    end
  end
end
