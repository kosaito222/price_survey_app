$(document).on('turbolinks:load', function() {

  // お気に入り保存
  $(function() {
    $('.saveBtn').click(function(e) {
      
      let recordValueArray = [];

      // ページ更新禁止
      e.preventDefault();
      // 保存ボタンクリック時
      $('[data-toggle="tooltip"]').tooltip({
        title: "お気に入りに保存しました",
        placement: 'top',
        trigger: 'manual'
      })
      // ツールチップ表示
      $(this).tooltip('show');
      // １秒後に消す
      setTimeout((function(){
        $(this).tooltip('hide');
      }).bind(this), 1000);

      // 行のデータを配列に入れる
      let num = $(this).parents("tr").children("td").length;
      for(i = 0; i < num - 2; i++) {
        let recordValue = $(this).parents("tr").children("td")[i].innerHTML;
        recordValueArray.push(recordValue.replace(/\r?\n/g,""));
      }
      console.log(recordValueArray);
      
      // 取得したデータをAjax通信でリクエストを投げる
      $.ajax({
        url: "/search_words",
        type: "POST",
        data: { 
          smallImageUrls: recordValueArray[0],
          shopName: recordValueArray[1],
          itemName: recordValueArray[2],
          reviewCount: recordValueArray[3],
          reviewAverage: recordValueArray[4],
          itemPrice: recordValueArray[5],
          pointRate: recordValueArray[6],
          realPrice: recordValueArray[7] 
        },
        dataType: "html",
        success: function(data) {
          console.log("success");
        },
        error: function(data) {
          console.log("error");
        }
      });

    }); 
  });
});