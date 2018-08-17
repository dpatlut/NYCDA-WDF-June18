Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
  #auto generates routes RESTFUL
  resources :skater

  #Custom Routes
  get 'profile', to: 'users#show'
  post 'profile', to: 'users#new'

end
