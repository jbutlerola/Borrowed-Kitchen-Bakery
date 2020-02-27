$(window).scroll(function(){
    if($(document).scrollTop() > ($('header').height())) {
        $('nav').addClass("navRed");
    } else {
        $('nav').removeClass("navRed");
    }
});