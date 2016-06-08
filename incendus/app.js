$(document).ready(function() {
  $(window).bind("resize", function() {
    if($(this).width() < 700) {
      $('.main').addClass('container-fluid');
    }
    else {
      $('.main').removeClass('container-fluid');
    }
  });
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
