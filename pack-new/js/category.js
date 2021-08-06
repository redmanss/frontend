$(document).ready(function () {
    let hash = window.location.hash.substr(1);
    if (hash === "") {
        $('.species .row').hide();
        $('.species #all').css('display', 'flex');
        $('.species .all').addClass("active-species");
    } else {
        //$('body,html').animate({scrollTop: 0}, 400);
       // $('.close-catalog-block').click();
        $('.catalog-b catalog-b-hover').click();
        $('.species #'+hash).css('display', 'flex');
        $('.species .'+hash).addClass("active-species");
    }

    $('.species span').click(function () {// підкатегорії і категорії в направленнях
        $('.species span').removeClass("active-species");
        let direction = $(this).attr("class");
        if (direction == 'all') {
            $('.species .row').hide();
            $('.species #all').css('display', 'flex');
            $(this).addClass("active-species");
        } else {
            $('.species .row').hide();
            $('.species' + ' #' + direction).css('display', 'flex');
            $(this).addClass("active-species");
        }
    });

});