$(function () {
// ----- SLIDE FILTER LIST
    $(".filter-title").click(function () {
        $(this).find(".plus").slideToggle(100);
        $(this).parent().find(".filter-box-list").slideToggle(200);
    });
// ----- OPEN FILTER MOB
    $(".fliter-mob-button").click(function () {
        $(".filter-block").animate({
            left: '0'
        });
        $(".wh-background").fadeIn();
        $("body").addClass("block-body");
    });
// ----- CLOSE FILTER MOB
    $(".n-modal-filter-header").click(function () {
        $(".filter-block").animate({
            left: '-340px'
        });
        $(".wh-background").fadeOut();
        $("body").removeClass("block-body");
    });
});
//
$(document).ready(function() {
    let offsetFilterblock = $('.filter-block').offset()

    // ----- CONFIRM FILTER
    if (document.documentElement.clientWidth > 1220) {
        $('.checkbox-list').click(function(){
            let topConfirm = $(this).offset()
    
            $('.confirm-filter-block').addClass('show').animate({
                top: topConfirm.top
            }, 300)
        })
    
        $('.confirm-filter-block').css({
            top: offsetFilterblock.top,
            left: offsetFilterblock.left + 330
        }, 300)
    }
})
//
// Scroll-top
$(function() {
    $.fn.scrollToTop = function() {
        let scrollDiv = $(this);
        $(window).scroll(function() {
            if ($(window).scrollTop() <= "250")
            {
                $(scrollDiv).css({display: 'flex'})
            }
            else {
                $(scrollDiv).css({display: 'flex'})
            }
        });
        $(this).click(function() {
            $("html, body").animate({scrollTop: 0}, "slow")
        })
    }
});
$(function() {
    $(".go-top").scrollToTop();
});  
//
$(document).ready(function () {
    var inProcess = false;
    var count = 24;
    let countProduct = $('#count-product').html();
    $(window).scroll(function () {
        if ($(window).scrollTop() + $(window).height() >= $(document).height() - 3000 && !inProcess) {
            if (countProduct>(count-12)) {
                if (location.pathname.indexOf("/f/") == -1) {
                    $.ajax({
                        url: location.pathname + count + '/',
                        method: 'GET',
                        beforeSend: function () {
                            inProcess = true;
                        }
                    }).done(function (data) {
                        $(".plb-list").last().append(data);
                        inProcess = false;
                        count += 12;
                    });
                }
            }

        }
    });
});

