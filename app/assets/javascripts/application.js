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

});