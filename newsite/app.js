$(document).ready(function() {
  $(window).bind("resize", function() {
    if($(this).width() < 700) {
      $('.main').addClass('container-fluid');
    }
    else {
      $('.main').removeClass('container-fluid');
    }
  });
});
