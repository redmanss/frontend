$(document).ready(function() {
    $('.fpi-title').click(function(){
        $(this).parent().find('.faq-page-plus').toggleClass('hide-plus')
        $(this).next().slideToggle();
    });
})