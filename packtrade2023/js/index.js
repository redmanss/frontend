$(document).ready(function(){
//
Fancybox.bind('[data-fancybox="index-video"]')
//
$('.pp-last-views-products').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: '.pp-arow-prev',
    nextArrow: '.pp-arow-next',
    responsive: [
      {
          breakpoint: 1400,
          settings: {
              slidesToShow: 6
          }
      },
      {
          breakpoint: 1023,
          settings: {
              slidesToShow: 4
          }
      },
      {
          breakpoint: 767,
          settings: {
              slidesToShow: 3
          }
      },
      {
          breakpoint: 500,
          settings: {
              slidesToShow: 2
          }
      }
  ]
})
// index main slider
$(".hsb-main").slick({
    autoplay: true,
});
// index brand slider
$(".hbb-brand-list").slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    responsive: [
      {
          breakpoint: 1400,
          settings: {
              slidesToShow: 6
          }
      },
      {
          breakpoint: 1023,
          settings: {
              slidesToShow: 4
          }
      },
      {
          breakpoint: 767,
          settings: {
              slidesToShow: 3
          }
      },
      {
          breakpoint: 500,
          settings: {
              slidesToShow: 2
          }
      }
  ]
});

})