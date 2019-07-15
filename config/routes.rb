Rails.application.routes.draw do
  root 'locations#index'
  devise_for :users
  resources :locations, only: [:index]
end
