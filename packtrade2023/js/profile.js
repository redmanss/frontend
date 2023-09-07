$(document).ready(function(){

    $('.hli-info').click(function() {
        $(this).find('.hli-arrow').toggleClass('rotate180')
        $(this).next('.hli-detail').slideToggle()
    })

    $('.profile-main-info').click(function(){
        $('.change-password-block').removeClass('grid-block')
        $('.profile-main-info-block').addClass('grid-block')
        $('.change-password').removeClass('login-active')
        $(this).addClass('login-active')
    })
    $('.change-password').click(function(){
        $('.change-password-block').addClass('grid-block')
        $('.profile-main-info-block').removeClass('grid-block')
        $('.profile-main-info').removeClass('login-active')
        $(this).addClass('login-active')
    })
})