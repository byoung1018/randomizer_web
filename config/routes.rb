Rails.application.routes.draw do
  devise_for :users do

  end
  root to: 'lists#new'
  resources :users, only: [] do
    resources :lists, only: [:create, :show, :index]
  end

end
