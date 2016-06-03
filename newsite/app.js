$(document).ready(function() {
  $(window).bind("resize", function() {
    if($(this).width() < 700) {
      $('.main').addClass('container-fluid');
      $('#menu_opener_comb').removeClass('menu_opener_comb_desktop').addClass('menu_opener_comb_phone');
    }
    else {
      $('.main').removeClass('container-fluid');
      $('#menu_opener_comb').removeClass('menu_opener_comb_phone').addClass('menu_opener_comb_desktop');
    }
  });
});
