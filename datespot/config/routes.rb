Rails.application.routes.draw do
  root 'locations#index'
  devise_for :users
  resources :locations, only: [:index, :show]
  resources :about, only: [:index]

  namespace :api do
    namespace :v1 do
      resources :locations, only: [:show]
    end
  end

end
