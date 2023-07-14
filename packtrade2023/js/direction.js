$(document).ready(function(){

    if (document.documentElement.clientWidth >= 1024) {
        $(".pop-brands").slick({
            variableWidth: true,
			slidesToShow: 20,
            slidesToScroll: 3,
            swipe: false,
            // prevArrow: '.ppop-arrows-prev',
            // nextArrow: '.ppop-arrows-next'
        });
        
    }
    
})