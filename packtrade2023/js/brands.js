$(document).ready(function(){

    $(".brand-filter a").on("click", function (e) {
        let anchor = $(this)
        
        $('html, body').stop().animate({scrollTop: $(anchor.attr('href')).offset().top - 50}, 777)
        e.preventDefault()
        
        return false
    })
    
})