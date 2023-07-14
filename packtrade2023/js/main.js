$(document).ready(function(){
// successful
$('.successful-button').click(function(){
    $('.msg-successful').hide()
    $('body').removeClass('block-body')
})
// Consultation
$('.consultation-button').click(function(){
    $('.consultation-block').show()
    $('body').addClass('block-body')
})
$('.close-consultation').click(function(){
    $('.consultation-block').hide()
    $('body').removeClass('block-body')
})
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
// Mob Menu Func
$('.mm-main-item').click(function() {
    let index = $(this).index() + 1
    $('.back-mob-menu-modal').delay(400).fadeIn(0)
    $('.mm-main-sub-item').hide()
    $('.mm-menu').animate({
        left: -650
    })
    $('.mm-main-sub').animate({
        left: 0
    })
    $('.mm-main-sub-item:nth-child(' + index + ')').show()
})
$('.back-mob-menu-modal').click(function(){
    $(this).hide()
    $('.mm-menu').animate({
        left: 0
    })
    $('.mm-main-sub').animate({
        left: -650
    })
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
// LOGIN
$('.login-for-client').click(function() {
    $('#login-form-user').show()
    $('#login-form-manager').hide()
    $('.login-for-manager').removeClass('login-active')
    $(this).addClass('login-active')
})
$('.login-for-manager').click(function() {
    $('#login-form-user').hide()
    $('#login-form-manager').show()
    $('.login-for-client').removeClass('login-active')
    $(this).addClass('login-active')
})
$('.n-login').click(function(){
    $('.login-modal').show()
    $('body').addClass('block-body')
})
$('.close-login-modal').click(function(){
    $('.login-modal').hide()
    $('body').removeClass('block-body')
})
// CART
$('#open-product-cart').click(function(){
    $('.cart-modal').show()
    $('body').addClass('block-body')
})
$('.close-cart-modal').click(function(){
    $('.cart-modal').hide()
    $('body').removeClass('block-body')
})
// GO TOP
$(function () {
    $.fn.scrollToTop = function () {
        $(this).click(function () {
            $("html, body").animate({scrollTop: 0}, "slow");
        })
    }
})
$(function () {
    $(".go-top").scrollToTop();
})
  })