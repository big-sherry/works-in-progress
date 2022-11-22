Rails.application.routes.draw do
  root 'static_pages#index'
  devise_for :users

  get '/', to: 'static_pages#index'
  get '/prompts', to: 'static_pages#index'
  get '/prompts/:id', to: 'static_pages#index'

  namespace :api do
    namespace :v1 do
      resources :prompts, only: [:index, :show] do
        resources :responses, only: [:create, :update]
      end
      resources :users, only: [:index]
      resources :responses, only: [:destroy]
    end
  end
end
