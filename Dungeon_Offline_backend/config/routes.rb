Rails.application.routes.draw do
  resources :monster_items
  resources :world_monsters
  resources :world_characters
  resources :character_items
  resources :monsters
  resources :worlds
  resources :items
  resources :users
  resources :characters
  resources :login, only: [:create]
  resources :signup, only: [:create]
  get '/profile', to: 'users#profile'
  mount ActionCable.server => '/cable'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
