$(document).ready(function () {
    $(".chb-more").on("click", function (e) {
        let anchor = $(this);
        $('html, body').stop().animate({scrollTop: $(anchor.attr('href')).offset().top}, 777);
        e.preventDefault();
        return false;
    });
});