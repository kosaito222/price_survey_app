# README

# 楽天価格調査アプリ

## 概要
 商品の商品検索APIを用いて、キーワードから商品の最安値を簡単に見やすく調べることができるアプリ。

## 機能
 追加予定

## 使用言語、バージョン
 追加予定

## データベース設計
### search-wordsテーブル

|Column|Type|Options|
|------|----|-------|
|keyword|String|
|ngkeyword|String|
|sort|Integer|
|orFlag|Boolean|

#### Association
- has_many : search-results

### search-resultsテーブル

|Column|Type|Options|
|------|----|-------|
|itemName|string|
|itemCode|string|
|itemPrice|Integer|
|itemUrl|string|unique: true|
|smallImageUrls|string|
|postageFlag|Boolean|
|reviewCount|Integer|
|reviewAverage|Integer|
|pointRate|string|
|comparison|Integer|

#### Association
- belongs_to : search-words