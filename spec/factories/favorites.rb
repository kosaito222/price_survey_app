FactoryBot.define do

  factory :favorite, :class => 'SearchWord' do
      smallImageUrls        {""}
      shopName              {"testShop"}
      itemName              {"testItem"}
      reviewCount           { 10 }
      reviewAverage         { 4.5 }
      itemPrice             { 9999 }
      pointRate             { 1 }
      realPrice             { 9000 }
  end

  factory :searchResult, :class => 'SearchWord' do
    
  end

end