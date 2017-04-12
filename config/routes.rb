Rails.application.routes.draw do
  root to: 'home#show', as: 'root'
  get '/dashboard', to: 'dashboard#show'
  get 'auth/:provider/callback', to: 'sessions#create'
  get 'auth/failure', to: redirect('/')
  get 'logout', to: 'sessions#destroy', as: 'logout'

  resources :sessions, only: [:create, :destroy]


end
