$(document).ready(function() {
    //--- Mob menu
    $('.header-menu-button').click(function(){
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
    //---Lang
    $(".lang-button").click(function() {
        $('.dropdown-lang').slideToggle(100)
      });

    $(document).on('click', function(e) {
    if (!$(e.target).closest(".dropdown-lang, .lang-button").length) {
        $('.dropdown-lang').hide()
    }
        e.stopPropagation()
    })
    //--- Login
    $('.cabinet-button').click(function(){
        $('.login-modal').show()
        $('body').addClass('block-body')
    })
    $('.close-login-modal').click(function() {
        $('.login-modal').hide()
        $('body').removeClass('block-body')
    })
    //--- CallBack form
    $('.callback-button, .pp-consultation-button').click(function(){
        $('.callback-modal').show()
        $('body').addClass('block-body')
    })
    $('.close-callback-modal').click(function() {
        $('.callback-modal').hide()
        $('body').removeClass('block-body')
    })
    //--- Check
    $('.successful-button-action').click(function() {
        $('.successful-modal').hide()
        $('body').removeClass('block-body')
    })
    //--- FAQ
    $('.faq-page-item').click(function(){
        $(this).find('.faq-page-plus').toggleClass('hide-plus')
        $(this).find('.fpi-answer').slideToggle();
    });
    //--- Anchor
    $('.anchor').on('click', function(event) {
        event.preventDefault();
  
        var target = $($(this).attr('href'));
  
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top -90
            }, 600);
        }
        $(".mob-menu-modal").fadeOut(200)
        $(".mob-menu-block").animate({
            left: -650
        })
      });
    //---ModalAboutTraining
    $('.catalog-block-item').click(function(){
        $('.training-modal').show()
        $('body').addClass('block-body')
    })
    $('.close-training-modal').click(function() {
        $('.training-modal').hide()
        $('body').removeClass('block-body')
    })
    $('.training-button').click(function() {
        $('.training-modal').hide()
    })
})
