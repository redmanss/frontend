$(function(){
    $('.slider-rent').slick({
        dots: false,
        nextArrow: '.rent-arrow-right',
        prevArrow: '.rent-arrow-left',
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
        breakpoint: 451,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }]
    });
});