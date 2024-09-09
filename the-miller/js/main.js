$(document).ready(function(){
    // lang
    $(".lang-button").click(function() {
        $('.drop-lang-header').slideToggle(100)
      });

    $(document).on('click', function(e) {
    if (!$(e.target).closest(".drop-lang-header, .lang-button").length) {
        $('.drop-lang-header').hide()
    }
        e.stopPropagation()
    })
// Mob-Menu
$('.mob-menu').click(function(){
    $(".mob-menu-modal").fadeIn(200)
    $(".mob-menu-block").animate({
        left: 0
    })
})
$('.close-mob-menu-modal').click(function(){
    $(".mob-menu-modal").fadeOut(200)
    $(".mob-menu-block").animate({
        left: -650
    })
})
// consultation
$('.consultation-button').click(function(){
    $(".n-consultation-block").show()
    $('body').addClass('block-body')
})
$('.close-consultation').click(function(){
    $(".n-consultation-block").hide()
    $('body').removeClass('block-body')
})
// callback
$('.call-back-button').click(function(){
    $(".n-callback").show()
    $('body').addClass('block-body')
})
$('.close-n-callback-block').click(function(){
    $(".n-callback").hide()
    $('body').removeClass('block-body')
})
// cart
$('.mob-cart-button').on('click', function(){
    $('.cart-modal').show()
    $('body').addClass('block-body')
})
$('.close-cart').on('click', function(){
    $('.cart-modal').hide()
    $('body').removeClass('block-body')
})
// close successful
$('.close-successful-block').on('click', function() {
    $('.successful-block').hide()
})
  })