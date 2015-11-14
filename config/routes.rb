Rails.application.routes.draw do
  devise_for :users do

  end
  root to: 'lists#new'
  resources :users do
    resources :lists#, only: [:create, :show]
  end

end
