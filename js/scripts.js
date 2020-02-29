$(window).scroll(function(){
    if($(document).scrollTop() > ($('header').height())) {
        $('nav').addClass("navAnimation");

    } else {
        $('nav').removeClass("navAnimation");
    }
});

$(window).scroll(function(){
    if($(document).scrollTop() > ($('header').height())) {
        $('.nav-item').addClass("listAnimation");
        
    } else {
        $('.nav-item').removeClass("listAnimation");
    }
});