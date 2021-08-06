$(function () {
	$('.fancybox').fancybox();
});

if (document.documentElement.clientWidth <= 570) {
	$(function() {
		$('.fancybox').unbind();

		$('.bxslider a').replaceWith(function () {
			return $('<span>').append($(this).contents());
		});

		$('.technique a').replaceWith(function () {
			return $('<span>').append($(this).contents());
		});

		$('.photo-gallery-photo a').replaceWith(function () {
			return $('<div>').append($(this).contents());
		});
	});
}