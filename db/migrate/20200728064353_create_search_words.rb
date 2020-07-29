class CreateSearchWords < ActiveRecord::Migration[6.0]
  def change
    create_table :search_words do |t|
      t.text :smallImageUrls
      t.string :shopName
      t.string :itemName
      t.integer :reviewCount
      t.decimal :reviewAverage
      t.integer :itemPrice
      t.integer :pointRate
      t.integer :realPrice
      t.timestamps
    end
  end
end
