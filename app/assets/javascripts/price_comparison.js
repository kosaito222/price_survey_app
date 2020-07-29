$(document).on('turbolinks:load', function() {

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