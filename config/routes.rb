Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show] do 
      resources :posts, only: [:create, :index, :update, :destroy]
    end 
    resource :session, only: [:create, :destroy]
    resources :friendship_requests, only: [:create, :index, :destroy]
    resources :friendships, only: [:create, :index, :destroy]
  end 
  get '/api/posts/newsfeed', to: 'api/posts#newsfeed'
end
