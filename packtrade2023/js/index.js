$(document).ready(function(){
// top sales products, new products index
$('.new-products-button').click(function(){
    $('.new-products .pl-item').show()
    $(this).hide()
})
$('.sales-leader-button').click(function(){
    $('.sales-leader .pl-item').show()
    $(this).hide()
})
//
Fancybox.bind('[data-fancybox="index-video"]')
//
$('.pp-last-views-products').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
          breakpoint: 1600,
          settings: {
              slidesToShow: 5
          }
      },
      {
        breakpoint: 1200,
        settings: {
            slidesToShow: 4
        }
    },
      {
          breakpoint: 1023,
          settings: {
              slidesToShow: 3
          }
      },
      {
          breakpoint: 767,
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