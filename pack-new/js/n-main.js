$(document).ready(function () {
    var body = $("body");

    $('.n-login-on, .m-account-on').hover(function () {
        $(this).find('.account-sub').show();
    }, function () {
        $('.account-sub').hide();
    });

    $(document).on("click", '.print-product', function () {
        let idManager = $('.manager-name').attr("id");
        if (idManager == undefined) {
            idManager = $('#manager-id').html();
        }
        let alias = $(this).attr("data-value");

        let language = $('#foo_label').html();

        window.open('https://pack-trade.com/product/printprod/' + alias + '/' + idManager + '/' + language + '/', '_blank');

    });


    $(document).on('click', '.pp-consul', function () {
        $(".n-consultation-block").css({
            display: 'block'
        });
        $("body").addClass("block-body");

    });
    $('.chb-order').click(function () {
        $(".n-consultation-block").css({
            display: 'block'
        });
        $("body").addClass("block-body");
    });

    $(document).on('click', '.successful-button-error', function () {
        $(".msg-error").hide();
    });

    $(document).on('click', '.successful-button', function () {
        $(".msg-successful").hide();
    });


    //menu cabinet
    $(document).on('click', '.account-history', function () {
        let language = $('#foo_label').html();
        document.location.href = "https://pack-trade.com/" + language + "/history/";
    });

    $(document).on('click', '.account-change-password', function () {
        let language = $('#foo_label').html();
        document.location.href = "https://pack-trade.com/" + language + "/change-password/";
    });

    $(document).on('click', '.account-edit-date', function () {
        let language = $('#foo_label').html();
        document.location.href = "https://pack-trade.com/" + language + "/edit-date/";
    });

    $(document).on('click', '.account-exit', function () {
        $.ajax({
            type: "GET",
            url: "/user/logout/",
        });
    });

    $(document).on('click', '.close-history-modal', function () {
        $('.white-background').fadeOut(150);
        $('.modal-history').fadeOut(150);
    });

    $(document).on('click', '.parts-history-block', function () {
        $(this).find('.parts-list-product').slideToggle();
    });
    //end menu cabinet

    // login form client
    $(document).on('click', '.n-login, .m-account', function () {
        $(".n-login-block-modal").css({
            display: 'flex'
        });
    });

    //close form login
    $(document).on('click', '.close-n-login', function () {
        $('.n-login-block-modal').hide();
    });

    $(".pp-callback, .call-back").click(function () {
        $(".n-callback").css({
            display: 'flex'
        });
        $("body").addClass("block-body");
    });

    $(".close-n-callback-block").click(function () {
        $(".n-callback").hide();
        $("body").removeClass("block-body");
    });

    //------ Manager
    $(document).on('click', '.consultation', function () {
        $(".n-consultation-block").show();
        $("body").addClass("block-body");
    });

    $(document).on('click', '.close-ncb', function () {
        $(".n-consultation-block").hide();
        $("body").removeClass("block-body");
    });
    // ----- Search
    $(document).on('click', '.h-search-tap', function () {
        $('.h-search-block').show(200);
    });

    $(document).on('click', '.h-close-search', function () {
        $('.h-search-block').hide(200);
    });
    // ----- Hover Sale
    $(".sale-b").hover(function () {
        $(this).toggleClass("sale-b-hover");
    });

    // ----- Basket
    $(document).on('click', '.basket-return', function () {
        $(".n-modal-basket-block").hide();
        $(body).removeClass("block-body");
    });

    $(document).on('click', '.main-consultation-button', function () {
        $(".n-consultation-block").css({
            display: 'block'
        });
        $("body").addClass("block-body");

    });

    $(document).on('click', '.successful-button-error', function () {
        $(".msg-error").hide();
    });

    $(document).on('click', '.successful-button', function () {
        $(".msg-successful").hide();
    });


    //Корзина на странице продукта
    $(document).on('click', '#open-product-cart', function () { //показать корзину
        let language = $('#foo_label').html();
        $.ajax({
            type: 'GET',
            url: '/cart/show-cart2/',
            data: {
                language: language
            },
            success: function (data) {
                document.querySelector(".n-modal-basket-block").innerHTML = data;
                $(".n-modal-basket-block").show();
                $(body).addClass("block-body");
            }
        });
    });

    $(document).on('click', '.n-modal-item-close', function () {
        let id = $(this).attr('data-basketvalue');
        let language = $('#foo_label').html();
        $.ajax({
            type: 'GET',
            url: '/cart/remove2/?id=' + id,
            data: {
                language: language
            },
            success: function (data) {
                document.querySelector(".n-modal-basket-block").innerHTML = data;
                $(".n-modal-basket-block").show();
                $(body).addClass("block-body");
                $.ajax({
                    type: 'GET',
                    url: '/cart/count-variation/',
                    success: function (data) {
                        $('#basket-number span').text(data);
                    }
                });
            }
        });

    });

    $('.pp-buy').click(function () {
        let id = $(this).attr('data-id');
        let language = $('#foo_label').html();
        $.ajax({
            type: 'GET',
            url: '/cart/add-to-cart2/?id=' + id,
            data: {
                language: language
            },
            success: function (data) {
                $('.success-block').fadeIn(150).delay(1000).fadeOut(150);
                $.ajax({
                    type: 'GET',
                    url: '/cart/count-variation/',
                    success: function (data) {
                        $('#basket-number span').text(data);
                    }
                });
            }
        });
    });

    $(document).on('click', '.n-modal-basket-content .basket-del', function () {
        let id = $(this).attr("data-id");
        let count = Number($(this).parent().find('.quantity-num').val());
        let language = $('#foo_label').html();
        if (count > 1) {
            let $quantityNum = $(this).parent().find('.quantity-num');
            $quantityNum.val(+$quantityNum.val() - 1);

            let countProduct = $(this).parent().find('.quantity-num').val();
            let priceProduct = $(this).parents('.n-modal-item').find('.price-product').attr("data-price-product");
            let sumPrice = (countProduct * priceProduct).toFixed(2);
            $(this).parents('.n-modal-item').find('.price-count-product').text(sumPrice);
            $.ajax({
                data: {
                    language: language
                },
                type: 'GET',
                url: '/cart/ajax-decrement/?id=' + id,
                success: function (data) {
                    $('#price-all').text(data);
                    $.ajax({
                        type: 'GET',
                        url: '/cart/count-variation/',
                        success: function (data) {
                            $('#basket-number span').text(data);
                        }
                    });
                }
            });
        }
    });

    $(document).on('click', '.n-modal-basket .basket-add', function () {
        let id = $(this).attr('data-id');
        let data = parseInt($(this).parents('.n-modal-item-quantity').find('.quantity-num').val());
        let count = Number($(this).parent().find('.basket-availability').attr("data-availability"));

        let language = $('#foo_label').html();
        if (data < count) {
            let $quantityNum = $(this).parent().find('.quantity-num');
            $quantityNum.val(+$quantityNum.val() + 1);

            let countProduct = $(this).parent().find('.quantity-num').val();
            let priceProduct = $(this).parents('.n-modal-item').find('.price-product').attr("data-price-product");
            let sumPrice = (countProduct * priceProduct).toFixed(2);
            $(this).parents('.n-modal-item').find('.price-count-product').text(sumPrice);
            $.ajax({
                type: 'GET',
                url: '/cart/ajax-increment/?id=' + id,
                data: {
                    language: language
                },
                success: function (data) {
                    $('#price-all').text(data);
                }
            });
        }
        ;
    });

    $(document).on('blur', '.n-modal-basket .quantity-num', function () {
        let $dataavailability = parseInt($(this).parents('.n-modal-item-quantity').find('.basket-availability').attr("data-availability"));
        let countInput = parseInt($(this).val());
        let language = $('#foo_label').html();
        if (Math.sign(countInput) == 1) {
            if (countInput > $dataavailability) {
                countInput = $dataavailability;
                $(this).val(countInput);
            }
        }
        else {
            countInput = 1;
            $(this).val(countInput);
        }
        let countProduct = $(this).parent().find('.quantity-num').val();
        let priceProduct = $(this).parents('.n-modal-item').find('.price-product').attr("data-price-product");
        let sumPrice = (countProduct * priceProduct).toFixed(2);
        $(this).parents('.n-modal-item').find('.price-count-product').text(sumPrice);

        let id = Number($(this).attr('data-id'));

        $.ajax({
            data: {
                language: language
            },
            type: 'GET',
            url: '/cart/ajax-upd-sum/?id=' + id + '&quantity=' + countInput,
            success: function (data) {
                $('#price-all').text(data);
            }
        });
    });

    $(document).on('click', '.n-close-modal-basket', function () {
        $(".n-modal-basket-block").hide();
        $(body).removeClass("block-body");
    });

    // ----- END BASKET
    // ----- Footer
    if (document.documentElement.clientWidth <= 767) {
        $(".title-footer-info, .title-main-social").click(function () {
            $(this).toggleClass("active-footer");
            $(this).next().slideToggle(200);
        });
    }
    // ----- MENU
    if (document.documentElement.clientWidth >= 1601) {
        let catalogBlock = $(".catalog-block");
        // let catalogB = $(".catalog-b");
        // $(".wh-bckg-c").click(function () {
        //     $(catalogBlock).toggleClass("catalog-block-hover");
        //     $(catalogB).toggleClass("catalog-b-hover");
        // });
        // $(catalogB).click(function () {
        //     $(catalogBlock).toggleClass("catalog-block-hover");
        //     $(this).toggleClass("catalog-b-hover");
        // });

    } else {
        $(".catalog-b").click(function () {
            $(body).addClass("block-body");
            $(".mob-menu-block").show();
            $(".mob-menu").animate({
                left: '0'
            });
        });
    }
    //
    $(".close-mob-menu").click(function () {
        $(body).removeClass("block-body");
        $(".catalog-b").removeClass("catalog-b-hover");
        $(".mob-menu").animate({
            left: '-450px'
        });
        $(".mob-menu-block").delay(100).fadeOut(100);
    });
    //
    $(".close-catalog-block").click(function () {
        $(".catalog-block").stop().fadeOut(100);
    });
    //
    $(".catalog-main-menu-item").hover(function () {
        let indexdata = $(this).data("numbermain");
        $(".catalog-main-menu-item, .catalog-main-menu-item-a").removeClass("active-catalog-main-menu");
        $(this).addClass("active-catalog-main-menu");
        $(".catalog-submenu .catalog-submenu-list").hide();
        $(".catalog-submenu .catalog-submenu-list:nth-child(" + indexdata + ")").show();
    });
    //
    $(".catalog-main-menu-item-a").hover(function () {
        $(".catalog-main-menu-item-a, .catalog-main-menu-item").removeClass("active-catalog-main-menu");
        $(this).addClass("active-catalog-main-menu");
        $(".catalog-submenu .catalog-submenu-list").hide();
    });
    //
    $(".mob-title").click(function () {
        $(this).parent().find(".sublistmenu").slideToggle(200);
        $(this).toggleClass("active-catalog-main-menu");
    });
    // ----- END MENU     

    $(".login-for-client").click(function() {
        $(this).addClass("login-active")
        $(".login-for-manager").removeClass("login-active")
        $("#login-form-user").show()
        $("#login-form-manager").hide()
    })
    $(".login-for-manager").click(function() {
        $(this).addClass("login-active")
        $(".login-for-client").removeClass("login-active")
        $("#login-form-user").hide()
        $("#login-form-manager").show()
    })
});