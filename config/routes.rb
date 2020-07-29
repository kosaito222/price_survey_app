Rails.application.routes.draw do
  resources :search_words, only: :index
end
