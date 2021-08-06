var show = true;
var countbox = ".text-proposition";
	$(window).on("scroll load resize", function(){
		if(!show) {
			return false; 						  // Отменяем показ анимации, если она уже была выполнена
		}                  
		var w_top = $(window).scrollTop();        // Количество пикселей на которое была прокручена страница
		var e_top = $(countbox).offset().top;     // Расстояние от блока со счетчиками до верха всего документа
		var w_height = $(window).height();        // Высота окна браузера
		var d_height = $(document).height();      // Высота всего документа
		var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
		if(w_top + 0 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height){
		$(".stats-number1").spincrement({
			to: 3023,
			duration: 2000
		});
		$(".stats-number2").spincrement({
		to: 88,
		duration: 2000
		});
		$(".stats-number3").spincrement({
		to: 3700,
		duration: 2000
		});
			show = false;
		}
	});