$(document).ready(function(){
    Fancybox.bind('[data-fancybox="pp-img"]')
    Fancybox.bind('[data-fancybox="pp-video"]')

// Last View
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
// animate a
$(".tab-product-page a").on("click", function (e) {
    let anchor = $(this)
    let indextab = $(this).index() + 1

    $('html, body').stop().animate({scrollTop: $(anchor.attr('href')).offset().top - 80}, 777)
    e.preventDefault()
    
    $('.tpp-block a').removeClass('active-tpp')
    $('.tpp-block a:nth-child(' + indextab + ')').addClass('active-tpp')
    
    return false
})
// fixed tab
$(window).scroll(function () {
    let windowsHeight = 300
    let top = $(document).scrollTop()
    if (top > windowsHeight) {
        $(".tpp-block").slideDown(200)
    }
    else {
        $(".tpp-block").slideUp(200)
    }
})
// call-back
$('.pp-callback').click(function(){
    $('.call-back-block').show()
    $('body').addClass('block-body')
})
$('.close-call-back-block').click(function(){
    $('.call-back-block').hide()
    $('body').removeClass('block-body')
})
// warehouse
$('.wb-button').click(function(){
    $('.warehose-modal-block').show()
    $('body').addClass('block-body')
})
$('.close-warehose-modal-block').click(function(){
    $('.warehose-modal-block').hide()
    $('body').removeClass('block-body')
})
// download
$('.pp-download-item').click(function(){
    $('.download-modal-block').show()
    $('body').addClass('block-body')
})
$('.close-download-modal-block').click(function(){
    $('.download-modal-block').hide()
    $('body').removeClass('block-body')
})
})