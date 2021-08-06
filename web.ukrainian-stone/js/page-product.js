// open avilability-now
$('.availability-now').click(function(){
    $('.availability-drop').slideToggle();
    $(this).find('.plus').toggle();
});
/*---- MAin table-----------------------------------*/
$('.main-table tr').click(function(){
    $(this).find('.main-table-sub').slideToggle();
    $(this).find('.plus').toggle();
});
//
$('.main-table-sub').prev('.plus-minus').show();
/*---- END main table-----------------------------------*/
$('[data-fancybox="gallery"]').fancybox({
    thumbs : {
        autoStart : false,
    },
    buttons: [
        //"zoom",
        //"share",
        //"slideShow",
        //"fullScreen",
        //"download",
        //"thumbs",
        "close"
    ],
    backFocus: false,
    autoFocus: false,
    trapFocus: false,
});
/*---- END change img-----------------------------------*/
$('.product-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    asNavFor: '.product-slider-nav'
});
$('.product-slider-nav').slick({
    asNavFor: '.product-slider',
    slidesToShow: 5,
    slidesToScroll: 1,
    focusOnSelect: true,
    prevArrow: '.left-arrow',
    nextArrow: '.right-arrow',
    responsive: [{
        breakpoint: 1124,
        settings: {
            slidesToShow: 4,
        }
    },
        {
            breakpoint: 901,
            settings: {
                slidesToShow: 7,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 6,
            }
        },
        {
            breakpoint: 587,
            settings: {
                slidesToShow: 5,
            }
        },
        {
            breakpoint: 490,
            settings: {
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 384,
            settings: {
                slidesToShow: 3,
            }
        }]
});
// page-pr tabs
$('.info').click(function () {
    $('.more-info').show();
    $('.more-service').hide();
    $('.services').removeClass('page-pr-tabs-active');
    $(this).addClass('page-pr-tabs-active');
});
//
$('.services').click(function () {
    $('.more-info').hide();
    $('.more-service').show();
    $('.info').removeClass('page-pr-tabs-active');
    $(this).addClass('page-pr-tabs-active');
});
// END page-pr-tabs