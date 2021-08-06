$(".main-slider").slick({
    autoplay:true,
    prevArrow: ".arrow-back-bl",
    nextArrow: ".arrow-next-bl"
});
//
$(document).ready(function(){
    $(".home-p-title a").on("click", function(e){
        let anchor = $(this);
        $('html, body').stop().animate({scrollTop: $(anchor.attr('href')).offset().top}, 777);
        e.preventDefault();
        return false;
        });
    });