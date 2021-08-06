$(document).ready(function () {
    $('.arrow-up-down').click(function () {
        $(this).toggleClass('arrow-up-down-click');
    });
});
$(document).on('click', '#bt-ok-message', function(){
    $(".ok-message").hide();
});
$(function () {
    $('.drop').click(function () {
        $('.manufacturer input[type=checkbox]').prop('checked', false);
        $('.input-range-reset').trigger('reset');
    });
    while ($('.species-rental .rental-section p').outerHeight() > 99) {
        $('.species-rental .rental-section p').text(function (index, text) {
            return text.replace(/\W*\s(\S)*$/, '...');
        });
    }
    $(".drop-tab-mobile").hide();
    $(".tab-mobile").click(function (event) {
        $(".drop-tab-mobile").slideToggle("fast");
        event.stopPropagation();
    });
    $(".drop-tab-mobile span").click(function () {
        $(".tab-mobile").html($(this).html());
        $(".drop-tab-mobile").slideToggle("fast");
        event.stopPropagation();
    });
    $("html").click(function () {
        $(".drop-tab-mobile").slideUp("fast");
    });
    $('.fb').hover(function () {
        $('.fb .img2').toggle();
        $('.fb .img1').toggle();
    });
    $('.youtube').hover(function () {
        $('.youtube .img2').toggle();
        $('.youtube .img1').toggle();
    });
    $('.about .read-news').click(function () {
        $('.about-hide').slideToggle();
        $('.read-news').hide();
        $('.hide-news').show();
    });
    $('.about .hide-news').click(function () {
        $('.about-hide').slideToggle();
        $('.read-news').show();
        $('.hide-news').hide();
    });
    $("#fl_inp").change(function () {
        let filename = $(this).val().replace(/.*\\/, "");
        $("#fl_nm").html(filename);
    });

    $('.conclusion-managers .row').hide();
    $('.conclusion-managers .all-managers').show();

    $('.nav-managers span,.about-page .drop-tab-mobile span').click(function () {
        $('.nav-managers span').removeClass('active');
        let dirManager = $(this).attr('id');
        $('.conclusion-managers .banner div').hide();
        $('.conclusion-managers .banner .' + dirManager).show();
        $('.conclusion-managers .row').hide();
        $('.conclusion-managers .' + dirManager).show();
        $(this).addClass('active');
    });

    $('h4').click(function () {
        $(this).children().toggleClass('h4-click');
        $(this).children('.arrow-items').toggleClass('arrow-click-filter');
        $(this).next().slideToggle();
    });
    $('.back').click(function () {
        $(this).hide();
        $('.nav-catalog').css('display', 'block');
        $('body').css('position', 'static');
        $('.menu-right').animate({right: '-260px'});
        setTimeout(function () {
            $('.menu-right').css('display', 'none')
        }, 700);
        $('.wrapper').animate({margin: '0'});
        $('.nav-catalog img').show();
        $('.cloak').hide();
    });
    $('.menu-right .item ul').hide();
    $('.menu-right .item-add-block ul').show();
    $('h5').click(function () {
        $(this).parent().toggleClass('item-click');
        $(this).next().slideToggle();
        $(this).children('.arrow-items').toggleClass('arrow-items-click');
    });
    $('.inf-hover li').hover(function () {
        $(this).next('li').find('a').css('box-shadow', 'none');
    }, function () {
        $(this).next('li').find('a').css('box-shadow', '0 -1px #eee');
    });
    $('.filter-menux').click(function () {
        $('body').css('position', 'static');
        $('.filter').animate({left: '-250px'});
        $('.wrapper').animate({margin: '0'});
        $('.filter-menux').css('visibility', 'hidden');
        $('.filter-button').css('visibility', 'visible');
        $('.cloak').hide();
    });
    $('.filter-button').click(function () {
        $('body').css('position', 'fixed');
        $('.filter').animate({left: '0'});
        $('.wrapper').animate({margin: '0 -250px 0 250px'});
        $('.filter-menux').css('visibility', 'visible');
        $('.filter-button').css('visibility', 'hidden');
        $('body, html').css('overflow-x', 'hidden');
        $('.cloak').show();
    });
    $('.info').click(function () {
        $('#equip-info').show();
        $(this).find('.img1').show();
        $(this).find('.img2').hide();
        $('#equip-video').hide();
        $('#equip-files').hide();
        $('#equip-spares').hide();
        $('#equip-tires').hide();
        $('#equip-attachments').hide();
    });
    $('.video').click(function () {
        $('#equip-video').show();
        $('#equip-info').hide();
        $(this).prevAll().find('.img1').hide();
        $(this).prevAll().find('.img2').show();
        $('#equip-files').hide();
        $('#equip-spares').hide();
        $('#equip-tires').hide();
        $('#equip-attachments').hide();
    });
    $('.files').click(function () {
        $('#equip-files').show();
        $('#equip-info').hide();
        $(this).prevAll().find('.img1').hide();
        $(this).prevAll().find('.img2').show();
        $('#equip-video').hide();
        $('#equip-spares').hide();
        $('#equip-tires').hide();
        $('#equip-attachments').hide();
    });
    $('.spares').click(function () {
        $('#equip-spares').show();
        $('#equip-info').hide();
        $(this).prevAll().find('.img1').hide();
        $(this).prevAll().find('.img2').show();
        $('#equip-files').hide();
        $('#equip-video').hide();
        $('#equip-tires').hide();
        $('#equip-attachments').hide();
    });
    $('.tires').click(function () {
        $('#equip-tires').show();
        $('#equip-info').hide();
        $(this).prevAll().find('.img1').hide();
        $(this).prevAll().find('.img2').show();
        $('#equip-files').hide();
        $('#equip-spares').hide();
        $('#equip-video').hide();
        $('#equip-attachments').hide();
    });
    $('.attachments').click(function () {
        $('#equip-attachments').show();
        $('#equip-info').hide();
        $(this).prevAll().find('.img1').hide();
        $(this).prevAll().find('.img2').show();
        $('#equip-files').hide();
        $('#equip-spares').hide();
        $('#equip-tires').hide();
        $('#equip-video').hide();
    });

    $('.equipment-info').click(function () {
        $(this).find('h3').css('color', '#0070ba');
        $(this).find('.count').css('background', '#0070ba');
        $(this).find('.count').css('color', '#fff');
        $(this).nextAll().find('h3').css('color', '#9c9b9b');
        $(this).nextAll().find('.count').css('background', '#eee');
        $(this).nextAll().find('.count').css('color', '#9c9b9b');
        $(this).prevAll().find('h3').css('color', '#9c9b9b');
        $(this).prevAll().find('.count').css('background', '#eee');
        $(this).prevAll().find('.count').css('color', '#9c9b9b');
        $(this).css({
            'border-top': '1px solid #eee',
            'border-bottom': 'none',
            'border-left': '1px solid #eee',
            'border-right': '1px solid #eee'
        });
        $(this).nextAll().css({
            'border-top': 'none',
            'border-bottom': '1px solid #eee',
            'border-left': 'none',
            'border-right': 'none'
        });
        $(this).prevAll().css({
            'border-top': 'none',
            'border-bottom': '1px solid #eee',
            'border-left': 'none',
            'border-right': 'none'
        })
    });
});
$(function() {
    $('.species-rental .nav-species span,.species-rental .drop-tab-mobile span').click(function () {
        let dirRental = $(this).find('h3').attr('class');
        let activeClass = $(this).parent().find(".active-species").attr('class').split(' ')[0];
        $(this).parent().find('span h3').removeClass("active-species");
        $('.'+dirRental).addClass('active-species');
        $('#'+dirRental).show();
        $('#'+activeClass).hide();
    });

    $('.drop-tab-mobile span').click(function () {
        let dirRental = $(this).attr('class').split(' ')[0];
        let activeClass = $(this).parent().find(".active-species").attr('class').split(' ')[0];
        $('#'+dirRental).css({'display':'block'});
        $('#'+activeClass).hide();
    });


    $('.manager .manager-mail img').click(function() {
        $('.cloak-manager').fadeOut('slow');
        $('.manager').hide();
        $('html, body').css('overflow-y','auto');
    });


    $('.tariff-plans-block .tariff .order').click(function () {
        $('.cloak-manager').fadeIn();
        $('.manager').fadeIn();
        $('html, body').css({'overflow':'hidden'});
    });

   if (document.documentElement.clientWidth <= 680) {
        $('.manager .manager-mail img').appendTo('.manager');
       $('.manager-rent .manager-mail img').appendTo('.manager-rent');
    }
});

if ($(window).width() < 371) {
    $('.search-top').click(function () {
        $('.search-top input').toggle(500);
    });
} else {
    $(function () {
        $('.search-top img').click(function () {
            $('.search-top input').toggle(1000);
        });
    });
}
// при наведені на головній сторінці на направлення компанії
if (document.documentElement.clientWidth >= 1000) {
    $(function () {
        $('.directions .classification').hover(function () {
            $(this).find('.img1').hide();
            $(this).find('.img2').show();
            $(this).find('span').css('color', '#0070ba');
        }, function () {
            $(this).find('.img1').show();
            $(this).find('.img2').hide();
            $(this).find('span').css('color', '#5e5f5e');
        });

        $('.menu-cat .section').hover(function () {
            $(this).find('.img1').hide();
            $(this).find('.img2').show();
            $(this).find('span').css('color', '#0070ba');
        }, function () {
            $(this).find('.img1').show();
            $(this).find('.img2').hide();
            $(this).find('span').css('color', '#5e5f5e');
        });

        $('.species .section').hover(function () {
            $(this).find('.img1').hide();
            $(this).find('.img2').show();
            $(this).find('span').css('color', '#0070ba');
        }, function () {
            $(this).find('.img1').show();
            $(this).find('.img2').hide();
            $(this).find('span').css('color', '#5e5f5e');
        });
    });
}
if (document.documentElement.clientWidth > 1024) {
    $(function () {
        $('.nav-catalog').click(function () {
            $('.menu-cat .container').slideToggle();
            $('.menux').toggle();
            $('.cloak').css({'background': '#000', 'opacity': '0.7', 'position': 'absolute'});
            var hDoc = $(document).height();
            $('.cloak').height(hDoc);
            $('.cloak').toggleClass('cloak-menu');
            $('.cloak').toggle();
            $('html, body').toggleClass('no-scroll');
            $('.nav-menu-top .inf-hover').toggleClass('inf-hover-db');
        });
        $('.cloak').click(function () {
            $('.menu-cat .container').slideToggle();
            $('.menux').toggle();
            var hDoc = $(document).height();
            $('.cloak').height(hDoc);
            $('.cloak').toggleClass('cloak-menu');
            $('.cloak').toggle();
            $('html, body').toggleClass('no-scroll');
            $('.nav-menu-top .inf-hover').removeClass('inf-hover-db');
        });
        $('.items-cat div').hover(function () {// при наведенні в каталозі на направлення
            let direction = $(this).attr("id");
            $('.item-cat').removeClass('item-cat-hover');
            $('.sections-cat').hide();
            $('#' + direction).addClass('item-cat-hover');
            $('#' + 'sections-' + direction).show();
            $('#' + direction + '-cat .row').css({'visibility': 'visible'});
            $('.section-cat').css({'display': 'inline'});
        });

    });
} else {
    $(function () {
        $('.nav-catalog').click(function () {
            $(this).css('display', 'none');
            $('body').css('position', 'fixed');
            $('.menu-right').css('display', 'unset');
            $('.menu-right').animate({right: '0'});
            $('.back').show();
            $('.wrapper').animate({margin: '0 260px 0 -260px'});
            $('.cloak').css({'opacity': '0.2'});
            $('.cloak').show();
            $('.menux').css('z-index', '-1');
        });
    });
}
if (document.documentElement.clientWidth > 1200) {
    $(document).on({
        mouseenter: function () {
            $(this).find('.characteristics').fadeIn(100);
            $(this).find('.more-info').show();
        },
        mouseleave: function () {
            $(this).find('.characteristics').hide();
            $(this).find('.more-info').hide();
        }
    }, '.list-equipment .section');
}
if (document.documentElement.clientWidth <= 768) {
    $(function () {
        $('.sorting').click(function () {
            $('.sorting ul').slideToggle();
            $('.sorting .arrow-items').toggleClass('sorting-arrow');
        });
    });
}
if ($(window).width() <= 570) {
    $('.nav-species span').appendTo('.drop-tab-mobile');
    $('.nav-managers span').appendTo('.drop-tab-mobile');
}
if ($(window).width() > 1300) {
    $(function () {
        $('.species-rental .row .rental-section').hover(function () {
            $('html').css('overflow-y', 'hidden');
        }, function () {
            $('html').css('overflow-y', 'visible');
        })
    })
}