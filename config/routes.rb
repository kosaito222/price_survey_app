Rails.application.routes.draw do
  resources :search_words, only: :index
  root to: "search_words#index"
end
