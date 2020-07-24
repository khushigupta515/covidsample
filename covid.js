
$(window).scroll(function(){
    $(".caption").css("opacity", 1 - $(window).scrollTop() / 800);
  });