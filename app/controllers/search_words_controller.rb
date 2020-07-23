class SearchWordsController < ApplicationController
  def index
    # フォームからキーワードを受け取って楽天から検索して結果をもらう
    if params[:keyword].present?
      @items = RakutenWebService::Ichiba::Item.search(keyword: params[:keyword])
    else
      puts "空白です。"
    end
  end
end