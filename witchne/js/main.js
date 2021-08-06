$(document).ready(function () {
    // Consultation
    $('.home-1screen-consultation, .pp-consultation').click(function() {
        $('.n-consultation-block').fadeIn(100)
        $('.ncb-container').slideDown(300)
        $('body').addClass('block-body')
    })
    $('.close-ncb').click(function(){
        $('.ncb-container').slideUp(300)
        $('.n-consultation-block').delay(100).fadeOut(100)
        $('body').removeClass('block-body')
    })
    // Burger menu
    $('.home-header-menu-burger').click(function() {
        $('.modal-burger-menu-block').fadeIn(100)
        $('.modal-burger-menu').animate({
            left: '0'
        })
        $('body').addClass('block-body')
    })
    $('.close-burger-menu').click(function() {
        $('.modal-burger-menu').animate({
            left: '-500px'
        })
        $(".modal-burger-menu-block").delay(100).fadeOut(100);
        $('body').removeClass('block-body')
    })
    // Favorites
    $('.home-header-menu-favorites').click(function(){
        $('.favorites-modal-block').fadeIn(100)
        $('.favorites-modal').slideDown(300)
        $('body').addClass('block-body')
    })
    $('.close-favorites-modal').click(function(){
        $('.favorites-modal').slideUp(300)
        $('.favorites-modal-block').delay(100).fadeOut(100)
        $('body').removeClass('block-body')
    })
    // Callback
    $('.call-back, .pp-call').click(function(){
        $('.n-callback').fadeIn(100)
        $('.n-callback-block').slideDown(300)
        $('body').addClass('block-body')
    })
    $('.close-n-callback-block').click(function(){
        $('.n-callback-block').slideUp(300)
        $('.n-callback').delay(100).fadeOut(100)
        $('body').removeClass('block-body')
    })
})