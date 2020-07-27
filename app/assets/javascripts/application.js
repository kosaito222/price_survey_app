//= require jquery3
//= require popper
//= require bootstrap
//= require_tree .
$(document).on('turbolinks:load', function() {

  // TOPへ戻るボタン
  $(function () {
    var topBtn = $('#page-top-scroll');
    // スクロールが500に達したらボタン表示
    $(window).scroll(function() {
      if ($(this).scrollTop() > 500) {
        topBtn.fadeIn();
      } else {
        topBtn.fadeOut();
      }
    });
    // スルスル戻る
    topBtn.click(function() {
      $('body, html').animate({
        scrollTop: 0
      }, 500);
      return false;
    })
  });

  // 価格比較プログラム
  $(function() {
    $('#comparisonBtn').click(function(e) {
      // ページ更新禁止
      e.preventDefault();
      
      let comparisonText = $('#comparisonText').val();
      let realPriceArray = [];
      
      // 入力チェック
      if (comparisonText == "") {
        alert("金額を入力してください");
      } else {
        // 金額計算
        $(function priceCalc() {
          $('td.realPrice').each(function(i) {
            realPriceArray.push($(this).text().replace(/\r?\n/g,"") - comparisonText);
            $('#resultTable').children("tbody").children("tr").eq(i).children("td.comparisonValue").text(realPriceArray[i]);
          });
        });  
      }
    });
  });

});