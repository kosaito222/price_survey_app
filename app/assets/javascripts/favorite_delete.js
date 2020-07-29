$(document).on('turbolinks:load', function() {

  // お気に入り削除
  $(function() {
    $('.deleteBtn').click(function(e) {
      // ページ更新禁止
      e.preventDefault();

      // 行のデータを配列に入れる
      let recordId = $(this).data("id");
      
      // Ajax通信でリクエストを投げる
      $.ajax({
        url: `/search_words/${recordId}`,
        type: "DELETE",
        data: { 
          id: recordId
        },
        dataType: "html",
        success: function(data) {
          console.log("success");
        },
        error: function(data) {
          console.log("error");
        }
      });

      $(this).parents("tr").remove();

    }); 
  });
});