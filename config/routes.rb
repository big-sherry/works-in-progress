Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users

  get '/', to: 'static_pages#index'
  get '/prompts', to: 'static_pages#index'

  namespace :api do
    namespace :v1 do
      resources :trails, only: [:index]
    end
  end
end
