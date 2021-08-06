// preloader
$(window).on('load', function () {
	"use strict";
    var $preloader = $('#page-preloader'),
        $spinner   = $preloader.find('.spinner');
    $spinner.fadeOut();
    $preloader.delay(1500).fadeOut('slow');
});
$(document).ready(function() {
    $(".search-mobile .start-search").click(function () {
        $(".search-mobile form").submit();
    });
});

$(document).ready(function() {
    $(".drop-search .start-search").click(function () {
        $(".drop-search form").submit();
    });
});
$(document).ready(function() {
	$('.consultation .consultation-container #send').click(function(){
        var nameUser = $('#name').val();
        var emailUser = $('#email').val();
        var phoneUser = $('#phone').val();
        var textMessage = $('#message').val();
        var emailManager = $('#emailman').text();

        $.ajax({
            url: '/site/send-manager/',
            type: 'GET',
            cache: true,
            data: {
                nameUser: nameUser,
                emailUser:emailUser,
                phoneUser:phoneUser,
                emailManager:emailManager,
                textMessage:textMessage
            },
            success: function (data) {
                document.getElementsByClassName('consultation')[0].style.display="none";
                document.getElementsByClassName('bg-dark')[0].style.display="none";
                $('#name').val('');
                $('#email').val('');
                $('#phone').val('');
                $('#message').val('');
            }
        });
    });
});
//Hide, click
$(document).mouseup(function (e) {
	"use strict";
    var container = $(".drop-language");
	var language = $(".language-now, .arrow");
    if (container, language.has(e.target).length === 0)
	{
        container.fadeOut();
		language.removeClass('language-now-click');
		language.removeClass('arrow-click');
    }
});
(function($) {
    var re = /([^&=]+)=?([^&]*)/g;
    var decodeRE = /\+/g;  // Regex for replacing addition symbol with a space
    var decode = function (str) {return decodeURIComponent( str.replace(decodeRE, " ") );};
    $.parseParams = function(query) {
        var params = {}, e;
        while ( e = re.exec(query) ) {
            var k = decode(e[1]), v = decode(e[2]);
            k = k.substring(0, k.indexOf('[') + 1) + k.substring(k.indexOf(']')); // вирізаємо індекс між дужками
            if (k.substring(k.length - 2) === '[]') {
                k = k.substring(0, k.length - 2);
                (params[k] || (params[k] = [])).push(v);
            }
            else params[k] = v;
        }
        return params;
    };
})(jQuery);
// other script
(function() {
"use strict";
// HEADER
if ($(window).width() >=768) {
	 $(window).scroll(function() {
        var top = $(document).scrollTop();
        if (top > 1100) {
			$(".head-1").css({top: '0px', position: 'fixed'});
			$(".production-menu1").css({top: '0px', position: 'fixed'});
		}
		else {
			$(".head-1").css({top: '1100px', position: 'absolute'});
			$(".production-menu1").css({top: '1100px', position: 'absolute'});
		}
    });
}
else {
	$(window).scroll(function() {
        var top = $(document).scrollTop();
        if (top > 700) {
			$(".head-1").css({top: '0px', position: 'fixed'});
			$(".production-menu1").css({top: '0px', position: 'fixed'});
		}
		else {
			$(".head-1").css({top: '700px', position: 'absolute'});
			$(".production-menu1").css({top: '700px', position: 'absolute'});
		}
    });
}
if ($(window).width() <=374) {
	 $(window).scroll(function() {
        var top = $(document).scrollTop();
        if (top > 600) {
			$(".head-1").css({top: '0px', position: 'fixed'});
			$(".production-menu1").css({top: '0px', position: 'fixed'});
		}
		else {
			$(".head-1").css({top: '600px', position: 'absolute'});
			$(".production-menu1").css({top: '600px', position: 'absolute'});
		}
    });
}
	// Company slider
$('.certificate-slider').slick({
	  slidesToShow: 1,
	  autoplay:true,
	  speed: 1000,
      prevArrow: '.certificate-arrow-left',
	  nextArrow: '.certificate-arrow-right',
});
// Company slider
$('.slider-equip-company').slick({
	  slidesToShow: 1,
      variableWidth: true,
	  autoplay:true,
	  speed: 1000,
      prevArrow: '.company-arrow-left',
	  nextArrow: '.company-arrow-right',
});
// products-slider-list
$('.product-list').slick({
      slidesToShow: 1,
      variableWidth: true,
      prevArrow: '.products-prev',
	  nextArrow: '.products-next',
});
	// products slider
  $('.slider-pr').slick({
	  autoplay:true,
	  speed: 1000,
	  autoplaySpeed: 3000,
	  prevArrow: '.prevp',
	  nextArrow: '.nextp',
  });
// Slider home
  $('.slider').slick({
	  autoplay:true,
	  speed: 1000,
	  autoplaySpeed: 6000,
	  prevArrow: '.prev', 
	  nextArrow: '.next',  
  });
// Filter-Slider + category slider	
  $('.filter-slider, .main-category-list').slick({
  	  variableWidth: true,
	  infinite: true,
  	  prevArrow: '.filter-prev, .category-prev',
      nextArrow: '.filter-next, .category-next',
  	  speed: 300,
  	  slidesToShow: 7,
  	  slidesToScroll: 2,
  	  responsive: [
    {
      breakpoint: 1199,
      settings: {
          slidesToShow: 6,
          slidesToScroll: 2,
      }
	}, 
	  {
      breakpoint: 811,
      settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
      }
	},
	  {
      breakpoint: 683,
      settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
      }
	},
	   {
      breakpoint: 524,
      settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
      }
	},
	  {
      breakpoint: 359,
      settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
      }
	},
	  {
      breakpoint: 322,
      settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
      }
	}
  ]
  });
//language
	$('.language').click(function(){
         $('.drop-language').stop().fadeToggle(250);
		 $('.language-now').toggleClass('language-now-click');
	     $('.arrow').toggleClass('arrow-click');		
        });
// Click filter-home
	$('.filter-category').click(function(){
		$(this).toggleClass('filter-hover');
	});
	$('.filter-button').click(function(){
		$(this).toggleClass('filter-hover');
	});
// Click proposition
	$('.proposition1').click(function() {
		$(this).find('.serv-img1, .serv-img1-active').hide();
		$(this).find('.serv-img2, .serv-img2-active').css({display: 'inline-block'}).show();
		$(this).find('h3').css({color: '#009fe3'}).show();
		$('.proposition2, .proposition3, .proposition4').find('.serv-img2, .serv-img2-active').hide();
		$('.proposition2, .proposition3, .proposition4').find('.serv-img1, .serv-img1-active').css({display: 'inline-block'}).show();
		$('.proposition2, .proposition3, .proposition4').find('h3').css({color: '#000'});
		$('.text-proposition1').delay(600).show( "drop", { direction: "down" }, 500 );
		$('.text-proposition2, .text-proposition3, .text-proposition4').fadeOut(400);
		if ($(window).width() <=767) {
			$('.proposition2, .proposition3, .proposition4').find('h3').hide();
		}
	});
	$('.proposition2').click(function() {
		$(this).find('.serv-img1, .serv-img1-active').hide();
		$(this).find('.serv-img2, .serv-img2-active').css({display: 'inline-block'}).show();
		$(this).find('h3').css({color: '#009fe3'}).show();
		$('.proposition1, .proposition3, .proposition4').find('.serv-img2, .serv-img2-active').hide();
		$('.proposition1, .proposition3, .proposition4').find('.serv-img1, .serv-img1-active').css({display: 'inline-block'}).show();
		$('.proposition1, .proposition3, .proposition4').find('h3').css({color: '#000'});
		$('.text-proposition2').delay(600).show( "drop", { direction: "down" }, 500 );
		$('.text-proposition1, .text-proposition3, .text-proposition4').fadeOut(400);
		if ($(window).width() <=767) {
			$('.proposition1, .proposition3, .proposition4').find('h3').hide();
		}
	});
	$('.proposition3').click(function() {
		$(this).find('.serv-img1, .serv-img1-active').hide();
		$(this).find('.serv-img2, .serv-img2-active').css({display: 'inline-block'}).show();
		$(this).find('h3').css({color: '#009fe3'}).show();
		$('.proposition2, .proposition1, .proposition4').find('.serv-img2, .serv-img2-active').hide();
		$('.proposition2, .proposition1, .proposition4').find('.serv-img1, .serv-img1-active').css({display: 'inline-block'}).show();
		$('.proposition2, .proposition1, .proposition4').find('h3').css({color: '#000'});
		$('.text-proposition3').delay(600).show( "drop", { direction: "down" }, 500 );
		$('.text-proposition1, .text-proposition2, .text-proposition4').fadeOut(400);
		if ($(window).width() <=767) {
			$('.proposition2, .proposition1, .proposition4').find('h3').hide();
		}
	});
	$('.proposition4').click(function() {
		$(this).find('.serv-img1, .serv-img1-active').hide();
		$(this).find('.serv-img2, .serv-img2-active').css({display: 'inline-block'}).show();
		$(this).find('h3').css({color: '#009fe3'}).show();
		$('.proposition2, .proposition3, .proposition1').find('.serv-img2, .serv-img2-active').hide();
		$('.proposition2, .proposition3, .proposition1').find('.serv-img1, .serv-img1-active').css({display: 'inline-block'}).show();
		$('.proposition2, .proposition3, .proposition1').find('h3').css({color: '#000'});
		$('.text-proposition4').delay(600).show( "drop", { direction: "down" }, 500 );
		$('.text-proposition1, .text-proposition3, .text-proposition2').fadeOut(400);
		if ($(window).width() <=767) {
			$('.proposition2, .proposition3, .proposition1').find('h3').hide();
		}
	});
// Click equipment
	$('.equip-tab1').click(function(){
		$(this).addClass('active-equip-tab', 100);
		$('.equip-tab2, .equip-tab3, .equip-tab4').removeClass('active-equip-tab');
		$('.equipment-right').find('.characteristics1').fadeIn(1000);
		$('.equipment-right').find('.characteristics2, .characteristics3, .characteristics4').fadeOut(400);
	});
	$('.equip-tab2').click(function(){
		$(this).addClass('active-equip-tab', 100);
		$('.equip-tab1, .equip-tab3, .equip-tab4').removeClass('active-equip-tab');
		$('.equipment-right').find('.characteristics2').fadeIn(1000);
		$('.equipment-right').find('.characteristics1, .characteristics3, .characteristics4').fadeOut(400);
	});
	$('.equip-tab3').click(function(){
		$(this).addClass('active-equip-tab', 100);
		$('.equip-tab2, .equip-tab1, .equip-tab4').removeClass('active-equip-tab');
		$('.equipment-right').find('.characteristics3').fadeIn(1000);
		$('.equipment-right').find('.characteristics2, .characteristics1, .characteristics4').fadeOut(400);
	});
	$('.equip-tab4').click(function(){
		$(this).addClass('active-equip-tab', 100);
		$('.equip-tab2, .equip-tab3, .equip-tab1').removeClass('active-equip-tab');
		$('.equipment-right').find('.characteristics4').fadeIn(1000);
		$('.equipment-right').find('.characteristics2, .characteristics3, .characteristics1').fadeOut(400);
	});	
	//drop-search
	$('.search').click(function(){
		$('.drop-search').fadeIn(300);
	});
	$('.close-search').click(function(){
		$('.drop-search').fadeOut(300);
	});
	//click menu-mobile
	$('.open-menu').click(function(){
		$('.drop-menu').toggle("slide", { direction: "right" },500);
		$('.bg-dark').fadeIn();
		$('body').css({overflow: "hidden"});
	});
	$('.close-menu').click(function(){
		$('.drop-menu').toggle("slide", { direction: "right" },500);
		$('.bg-dark').fadeOut();
		$('body').css({overflow: "auto"});
	});
	//filterbox
	$('.filter-name').click(function(){
		$(this).next().slideToggle();
		$(this).find('.minus').toggleClass("rotate");
	});
	//Click open-filter
	$('.open-filter').click(function(){
		$('.sidebar').toggle("slide", { direction: "left" },500);
		$('.bg-dark').fadeIn();
		$('body').css({overflow: "hidden"});
	});
	$('.close-filter').click(function(){
		$('.sidebar').toggle("slide", { direction: "left" },500);
		$('.bg-dark').fadeOut();
		$('body').css({overflow: "auto"});
	});
	//product page tabs
	$('.information').click(function(){
		$('.photo-video-block').hide();
		$('.files-block').hide();
		$('.information-block').fadeIn(800);
		$('.inform2').fadeIn(800);
		$(this).css({borderBottom: "3px solid #009fe3"});
		$('.photo-video, .files').css({borderBottom: "none"});
	});
	$('.photo-video').click(function(){
		$('.information-block').hide();
		$('.files-block').hide();
		$('.inform2').hide();
		$('.photo-video-block').fadeIn(800);
		$(this).css({borderBottom: "3px solid #009fe3"});
		$('.information, .files').css({borderBottom: "none"});
	});
	$('.files').click(function(){
		$('.information-block').hide();
		$('.photo-video-block').hide();
		$('.inform2').hide();
		$('.files-block').fadeIn(800);
		$(this).css({borderBottom: "3px solid #009fe3"});
		$('.photo-video, .information').css({borderBottom: "none"});
	});
	//consultation
	$('.pr-page-consul, .button-order').click(function(){
		$('.consultation').slideToggle();
		$('.bg-dark').fadeIn();
	});
	$('.close-consultation').click(function(){
		$('.consultation').slideToggle();
		$('.bg-dark').fadeOut();
	});
	// media page
	$('.page-media').hover(function(){
		$(this).find('img').css({
			'transition': 'all 1s',
        	'transform': 'scale(1.1)',
		});
	}, function(){
		$(this).find('img').css({
			'transition': 'all 2s',
        	'transform': 'scale(1.0)',
		});
	}); 
	// PRODUCT MENU
	$('.product-menu, .production-menu1, .production-menu2').hover(function(){
		$('.production-menu1, .production-menu2').stop().slideDown(400);
		$('.bg-dark2').stop().fadeIn();
		$('.product-menu').css({color: "#009fe3"});
	}, function(){
		$('.production-menu1, .production-menu2').stop().slideUp(400);
		$('.bg-dark2').stop().fadeOut();
		$('.product-menu').css({color: "#000"});
	}); 
	// PRODUCT MENU - DROP MENU
	$('.production-menu-direction').find('div:nth-child(1)').hover(function(){
		$('.menu-list').find('ul:nth-child(n)').stop().slideUp(400);
		$('.menu-list').find('ul:nth-child(1)').stop().slideDown(400);
		$('.production-menu-direction').find('div').removeClass('menu-direct-acrive');
		$(this).addClass('menu-direct-acrive');
		$('.img-menu-block').find('img:nth-child(n)').stop().fadeOut();
		$('.img-menu-block').find('img:nth-child(1)').stop().fadeIn();
	});
	//
	$('.production-menu-direction').find('div:nth-child(2)').hover(function(){
		$('.menu-list').find('ul:nth-child(n)').stop().slideUp(400); 
		$('.menu-list').find('ul:nth-child(2)').stop().slideDown(400);
		$('.production-menu-direction').find('div').removeClass('menu-direct-acrive');
		$(this).addClass('menu-direct-acrive');
		$('.img-menu-block').find('img:nth-child(n)').stop().fadeOut();
		$('.img-menu-block').find('img:nth-child(2)').stop().fadeIn();
	});
	// PRODUCT MOBILE MENU
	$('.mobile-product').click(function(){
		$('.menu-mobile-block').hide("slide", { direction: "left" }, 500);
		$('.product-mobile-menu').show("slide", { direction: "right" }, 500);
	});
	//
	$('.back-mobile').click(function(){
		$('.menu-mobile-block').show("slide", { direction: "left" }, 500);
		$('.product-mobile-menu').hide("slide", { direction: "right" }, 500);
	});
	// CONTACT TABS
	$('.tab-contact').find('div:nth-child(1)').click(function(){
		$('.tab-contact').find('div').removeClass('tab-contact-active');
		$(this).addClass('tab-contact-active');
		$('.managers').find('div:nth-child(n)').stop().slideUp(400); 
		$('.managers').find('div:nth-child(1)').stop().slideDown(400);
	});
	//
	$('.tab-contact').find('div:nth-child(2)').click(function(){
		$('.tab-contact').find('div').removeClass('tab-contact-active');
		$(this).addClass('tab-contact-active');
		$('.managers').find('div:nth-child(n)').stop().slideUp(400); 
		$('.managers').find('div:nth-child(2)').stop().slideDown(400);
	});
	// product scale
	$('.product').hover(function(){
	    $(this).css({transform: "scale(1.04)"});
	    }, function(){
	        $('.product').css({transform: "scale(1)"});
	});
}());