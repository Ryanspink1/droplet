Rails.application.routes.draw do
  root to: 'home#show', as: 'root'
  get '/search', to: 'search#index'
  get '/dashboard', to: 'dashboard#show'
  get 'auth/:provider/callback', to: 'sessions#create'
  get 'auth/failure', to: redirect('/')
  get 'logout', to: 'sessions#destroy', as: 'logout'
  # get '/auth/google_oauth2', to: 'sessions#create'


  resources :sessions, only: [:create, :destroy]

  resources :stations, only: [:index, :show]


end
