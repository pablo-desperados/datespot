Rails.application.routes.draw do
  root 'locations#index'
  devise_for :users
  resources :locations, only: [:index, :new]

  namespace :api do
    namespace :v1 do
      resources :locations, only: [:create]
    end
  end
end
