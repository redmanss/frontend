//
$(document).on('click', '.personal-data', function () {
    $('.personal-data-block').show();
    $(this).addClass('active-profile');
    $('.my-oreders, .discount').removeClass('active-profile');
    $('.my-orders-block, .discount-block').hide();
});
//
$(document).on('click', '.my-oreders', function () {
    $('.my-orders-block').show();
    $(this).addClass('active-profile');
    $('.personal-data, .discount').removeClass('active-profile');
    $('.personal-data-block, .discount-block').hide();
});
//
$(document).on('click', '.discount', function () {
    $('.discount-block').show();
    $(this).addClass('active-profile');
    $('.my-oreders, .personal-data').removeClass('active-profile');
    $('.my-orders-block, .personal-data-block').hide();
});