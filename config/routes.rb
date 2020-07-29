Rails.application.routes.draw do
  resources :search_words, only: [:index, :create, :destroy] do
    collection do
      get 'favorite'
    end
  end
  root to: "search_words#index"
end
