$(document).on('click', '.close-ncb', function () {
    $(".n-consultation-block").hide();
    $("body").removeClass("block-body");
});

$(document).on('click', '.call-back', function () {
    $(".n-callback").css({
        display: 'flex'
    });
    $("body").addClass("block-body");
});

$(window).scroll(function () {
    let windowsHeight = $(window).height();
    let top = $(document).scrollTop();
    if (top > windowsHeight) {
        $(".chb-header2").slideDown(200);
    }
    else {
        $(".chb-header2").slideUp(200);
    }
});
$(document).ready(function () {
    $(".ch-menu a, .chb-more, .chb-mob-menu-a a").on("click", function (e) {
        let anchor = $(this);
        $('html, body').stop().animate({scrollTop: $(anchor.attr('href')).offset().top}, 777);
        e.preventDefault();
        return false;
    });
});
//
$(".chb-mob-ico").click(function () {
    $(".chb-mob-menu").animate({
        left: '0'
    });
    $(".wh-background").fadeIn();
    $("body").addClass("block-body");
});
//
$(".chb-close, .chb-mob-menu-a a").click(function () {
    $(".chb-mob-menu").animate({
        left: '-450'
    });
    $(".wh-background").fadeOut();
    $("body").removeClass("block-body");
});

    
