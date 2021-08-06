$(function () {
    if ($(window).width() >=1450) {
        $(document).on('mouseover', '.product', function () {
            $(this).find(".product-mini-sllider").toggleClass("product-mini-sllider-vs");
        });
        $(document).on('mouseout', '.product', function () {
            $(this).find(".product-mini-sllider").toggleClass("product-mini-sllider-vs");
        });
        //
        $(".mini-slider").slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            vertical: true,
            verticalSwiping: true,
        });
    }
    $(".filter-title").click(function () {
        $(this).parent().find(".plus").slideToggle(100);
        $(this).parent().find(".hide-filter-box").slideToggle(200);
    });
    $(".filter-show-all").click(function () {
        $(this).parent().find(".filter-box-list").css({
            height: 'auto',
        });
        $(this).hide();
        $(this).parent().find(".filter-hide").show();
    });
    $(".filter-hide").click(function () {
        $(this).parent().find(".filter-box-list").css({
            height: '110px',
        });
        $(this).hide();
        $(this).parent().find(".filter-show-all").show();
    });
    $(".sort-price, .sort-block-price").hover(function () {
        $(".sort-block-price").stop().slideToggle(150);
    }, function () {
        $(".sort-block-price").stop().slideToggle(150);
    });
    $(".fast-size-block").click(function () {
        $(this).find(".change-size").slideToggle(200);
    });
    $(".close-fast-view").click(function () {
        $(".fast-view-block").toggleClass("fast-view-block-show");
        $('.white-background').fadeOut(150);
    });
    $(document).on('click', '.product-fast-view', function () {
        $(".fast-view-block").toggleClass("fast-view-block-show");
        $('.white-background').fadeIn(150);
    });
    $(".filter-icon").click(function () {
        $(".filter-block").animate({
            left: '0'
        });
        $('.white-background').fadeIn(150);
        $(".filter-app-but").fadeIn();
    });
    $(".close-filter-block").click(function () {
        $(".filter-block").animate({
            left: '-420px'
        });
        $('.white-background').fadeOut(150);
    });
    $(".name-filter").click(function () {
        $(this).toggleClass("name-filter-a");
    });
    $(".cbx-bg").click(function () {
        $(this).next().toggleClass("name-filter-a");
    });
    // ---------------------


    $('.fast-img-slide-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: false,
        infinite: false,
        asNavFor: '.fast-img-slide-nav'
    });
    $('.fast-img-slide-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        focusOnSelect: true,
        asNavFor: '.fast-img-slide-for',
        infinite: false,
    });
});

