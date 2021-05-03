Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  
  get '/user/:id/posts', to: 'posts#get_user_posts'
  
  post '/posts/:id/comments', to: 'comments#create'

  put '/posts/:id/like', to: 'posts#like'

  get '/posts/trending', to: 'posts#trending'
  
  resources :likes
  # resources :comments
  resources :posts
  resources :users
end
