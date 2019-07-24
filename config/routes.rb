Rails.application.routes.draw do
  root 'locations#index'
  devise_for :users
  resources :locations, only: [:index, :new, :create, :show, :edit, :update] do
    resources :reviews, only: []
  end

  namespace :api do
    namespace :v1 do
      resources :locations, only: [:show, :create, :index, :destroy, :update]
    end
  end
end
