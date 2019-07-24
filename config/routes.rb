Rails.application.routes.draw do
  devise_for :users

  resources :locations, only: [:index, :new, :create, :show] do
    resources :reviews, only: []
  end

  namespace :api do
    namespace :v1 do
      resources :locations, only: [:show, :create, :index, :update] do
        resources :reviews, only: [:create]
      end
    end
  end
  root 'locations#index'
end
