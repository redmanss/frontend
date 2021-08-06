$(document).ready(function(){
    $(".header-block, .footer-menu, .mobile-menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
        $(".mobile-menu").animate({
            right: "-360px",
        });
        $(".background").fadeOut();
    });
});
//
$(function () {
    // $('.works-slider-h').slick({
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     nextArrow: '.next-h',
    //     prevArrow: '.prev-h',
    //     infinite: false,
    // });
    // //
    // $('.works-slider-w').slick({
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     nextArrow: '.next-w',
    //     prevArrow: '.prev-w',
    //     infinite: false,
    // });
    //
    $('.works-slider-s').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: '.next-s',
        prevArrow: '.prev-s',
        infinite: false,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2
                }
        },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1
                }
            }

        ]
    });
    //
    // $('.ts-slider').slick({
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     nextArrow: '.next-ts',
    //     prevArrow: '.prev-ts',
    //     infinite: false,
    //     variableWidth: true,
    // });
    //
    $(".burger-menu").click(function () {
        $(".mobile-menu").animate({
            right: "0",
        });
        $(".background").fadeIn();
    });
    //
    $(".close-menu").click(function () {
        $(".mobile-menu").animate({
            right: "-360px",
        });
        $(".background").fadeOut();
    });
});