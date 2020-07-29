class SearchWordsController < ApplicationController
  def index
    # フォームからキーワードを受け取って楽天から検索して結果をもらう
    @startTime = Time.now
    @items_array = []
    
    if params[:keyword].present?
      # 10ページ取得
      # 重たいのでロジックを要検討
      # 一度DBに打ち込んでしまったほうがページネーションは速そう
      10.times do |i|
        i += 1
        @searchResult = searchRequest(i)
        # 結果を配列に入れる
        @searchResult.each do |item|
          @items_array.push(item)
        end
      end

      # 配列をページネート
      @items = Kaminari.paginate_array(@items_array).page(params[:page]).per(20)
    else
      puts "空白です。"
    end
  end


  private
  # ページをパラメータとしてリクエストを投げるメソッド
  def searchRequest(page)
    RakutenWebService::Ichiba::Item.search(keyword: params[:keyword], page: page)
  end
end