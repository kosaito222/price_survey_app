require 'csv'

CSV.generate do |csv|
  column_names = %w(shopName itemName reviewCount reviewAverage itemPrice pointRate realPrice)
  csv << column_names
  @favorite.each do |data|
    column_values = [
      data.shopName,
      data.itemName,
      data.reviewCount,
      data.reviewAverage,
      data.itemPrice,
      data.pointRate,
      data.realPrice
    ]
    csv << column_values
  end
end