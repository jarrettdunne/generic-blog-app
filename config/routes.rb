Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'

  # custom route / method for creating a post?
  resources :users
  
  resources :posts, except: :show do
    resources :comments, only: :create
  end
end
