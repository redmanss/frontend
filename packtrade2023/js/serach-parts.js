$(document).ready(function(){
    Fancybox.bind("[data-fancybox]")
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
    
    })