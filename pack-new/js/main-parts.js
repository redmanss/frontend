$(function () {
    $(document).on('click', '.parts-history-block', function () {
        $(this).find('.parts-list-product').slideToggle();
    });

    $(document).on('click', '.close-basket-modal', function () {
        $('.white-background').fadeOut(150);
        $('.modal-basket').fadeOut(150);
    });

    $(document).on('click', '.close-basket', function () {
        $(this).parent().remove();
    });

    $(document).on('click', '.close-history-modal', function () {
        $('.white-background').fadeOut(150);
        $('.modal-history').fadeOut(150);
    });

    $(document).on('click', '.close-history', function () {
        $(this).parent().remove();
    });

    $('.icon-sidebar').click(function () {
        $(".parts-sidebar").animate({
            left: '0'
        });
        $('.white-background').fadeIn(150);
    });

    $('.close-sidebar').click(function () {
        $(".parts-sidebar").animate({
            left: '-320px'
        });
        $('.white-background').fadeOut(150);
    });
    // login form client
    $(document).on('click','.parts-login',function() {
        $(".n-login-block-modal").css({
            display: 'flex'
        });
    });

    //close form login
    $(document).on('click','.close-login',function() {
        $('.n-login-block-modal').hide();
    });

    //registration
    $('.parts-reg').click(function () {
        $('.registration').show().toggleClass('login-hover');
        $('.white-background').fadeIn(150);
    });
    //close login
    $('.close-reg').click(function () {
        $('.registration').hide().toggleClass('login-hover');
        $('.white-background').fadeOut(150);
    });
    // registration
    $('.select-reg-title').click(function () {
        $('.reg-drop').toggle();
    });

    $('.reg-drop div').click(function () {
        var regdr = $(this).data('reg1');
        var text = $(this).text();
        $('.reg-direction-title').text(text);
        $('.reg-phone div').hide();
        $(".reg-phone div:nth-child(" + regdr + ")").show();
        $('.reg-drop').hide();
    });

    $('.mycabinet').hover(function () {
        $('.parts-accaunt-sub').show();
    }, function () {
        $('.parts-accaunt-sub').hide();
    });

});

//manager
$(document).on('click', '.successful-button-error', function () {
    $(".msg-error").hide();
});

$(document).on('click', '.successful-button', function () {
    $(".msg-successful").hide();
});

$(document).on('click', '.main-consultation-button', function () {
    $(".n-consultation-block").css({
        display: 'block'
    });
    $("body").addClass("block-body");
});

$(document).on('click', '.pp-consul', function () {
    $(".n-consultation-block").css({
        display: 'block'
    });
    $("body").addClass("block-body");

});

//manager
$(document).on('click', '.parts-accaunt-exit', function () {
    $.ajax({
        type: "GET",
        url: "/parts/logout/",
    });
});

$(document).on('click', '.parts-accaunt-history', function () {
    let language = $('#foo_label').html();
    document.location.href = "https://pack-trade.com/"+language+"/history/";
});

$(document).on('click', '.parts-accaunt-change-password', function () {
    let language = $('#foo_label').html();
    document.location.href = "https://pack-trade.com/" + language + "/parts/change-password/";
});
$(document).on('click', '.parts-accaunt-edit-date', function () {
    let language = $('#foo_label').html();
    document.location.href = "https://pack-trade.com/" + language + "/parts/edit-date/";
});

//показать товары в корзине
$(document).on('click', '.mybasket', function () {
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


//добавить в корзину на странице поиска
$(document).on('click', '.nps-button', function () {
    let id = $(this).attr("data-id");
    let language = $('#foo_label').html();
    let quantity = $(this).parent().find('.quantity-num').val();

    $.ajax({
        type: 'GET',
        url: '/cart/add-to-cart2/?id=' + id + '&quantity=' + quantity,
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

$(document).on('click', '.parts-product-button', function () {
    let id = $(this).attr("data-id");
    let language = $('#foo_label').html();
    $.ajax({
        type: 'GET',
        url: '/cart/add-to-cart/?id=' + id + '&quantity=' + 1,
        data: {
            language: language
        },
        success: function (data) {
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

$(document).on('click', '.close-basket', function () {
    let id = $(this).attr("data-id");
    let language = $('#foo_label').html();
    $.ajax({
        type: 'GET',
        url: '/cart/remove/?id=' + id,
        data: {
            language: language
        },
        success: function (data) {
            document.querySelector(".modal-basket").innerHTML = data;
            document.getElementsByClassName("modal-basket")[0].style.display = "block";
            document.getElementsByClassName("white-background")[0].style.display = "block";
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

$().ready(function () {
    $('.cbdelivery option:selected').val()
    if ($('.cbdelivery option:selected').val() == 1){
        $("#newPost").css("display", "block");
    }else{
        $("#newPost").css("display", "none");
        $("#textDostavka").css("display", "block");
    }
    var $eventSelect = $(".city-wrapper");
    $eventSelect.on("select2:unselect", removeWarehouses);
    $eventSelect.on("select2:select", function (e) {
        getWarehouses(e.params.data.id);
    });

    $('.cbpayment').on('select2:select', function (e) {
        console.log(e.params.data.id);
        var val = Number(e.params.data.id);
        if (val == 1) {
  $("#pislyplata").css("display", "none");
            $("#bezhroshova").css("display", "block");
        
        } else {
            $("#pislyplata").css("display", "block");
            $("#bezhroshova").css("display", "none");

        }
    });

    $('.cbdelivery').on('select2:select', function (e) {
        var val = Number(e.params.data.id);
        if (val == 1) {
            $("#textDostavka").css("display", "none");
            $("#newPost").css("display", "block");
        } else {
            $("#newPost").css("display", "none");
            $("#textDostavka").each(function () {
                $(this).css("font-size", "14px");
            });
            $("#textDostavka").css("display", "block");
        }
    });

    /* Заватажує та оновлює відділення на сторінці */
    function getWarehouses(cityName) {
        $('.cbwarehouses').load('/cart/get-warehouses-html/?cityname=' + encodeURIComponent(cityName) + ' option', function (response, status) {
            if (status == "success") {
                $('.cbwarehouses').val(null);
            }
        });
    }
    /* очищує відділення */
    function removeWarehouses() {
        $('.warehouses-wrapper option').remove();
    }
});