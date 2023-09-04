$(document).ready(function(){
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
// product list filter
$('.open-filter').click(function(){
    $(".sidebar").fadeIn(200)
    $(".filter").animate({
        left: 0
    })
    $('body').addClass('block-body')
})
$('.close-mob-filter-modal').click(function(){
    $(".sidebar").fadeOut(200)
    $(".filter").animate({
        left: -650
    })
    $('body').removeClass('block-body')
})

$('.filter-name').click(function(){
    $(this).next().slideToggle(200)
    $(this).find('.mdi').toggleClass('mdi-rotate-180')
});

$('.show-all-filter').click(function(){
    $(this).parent().find('.checkbox-list').show()
    $(this).removeClass('inline-block')
    $(this).parents('.filter-list').find('.hide-all-filter').addClass('inline-block')
})
$('.hide-all-filter').click(function(){
    $(this).parent().find('.checkbox-list:nth-child(n+5)').hide()
    $(this).removeClass('inline-block')
    $(this).parents('.filter-list').find('.show-all-filter').addClass('inline-block')
})
//

})