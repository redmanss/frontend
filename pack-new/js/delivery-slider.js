$(document).ready(function () {
    $('.slider-autopark').slick({
        slidesToShow: 1,
        variableWidth: true,
        autoplay:true,
        speed: 1000,
        prevArrow: '.delivery-arrow-left',
        nextArrow: '.delivery-arrow-right',
    });
});