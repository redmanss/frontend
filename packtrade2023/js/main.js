$(document).ready(function(){
// lang
$(".lang-button").click(function() {
    $('.drop-lang-header').slideToggle(100)
    });

$(document).on('click', function(e) {
if (!$(e.target).closest(".drop-lang-header, .lang-button, .sub-menu-button, .drop-sub-menu").length) {
    $('.drop-lang-header, .drop-sub-menu').hide()
}
    e.stopPropagation()
})
// search
$('.h-search-tap').click(function(){
    $('.h-search-block').show()
    $('body').addClass('block-body')
})
$('.h-close-search').click(function(){
    $('.h-search-block').hide()
    $('body').removeClass('block-body')
})
// sub-menu
$(".sub-menu-button").click(function() {
    $('.drop-sub-menu').slideToggle(100)
    });
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
  })