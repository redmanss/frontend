$(document).ready(function () {
    $('.chb-order').click(function () {
        $(".n-consultation-block").css({
            display: 'block'
        });
        $("body").addClass("block-body");
    });

    $(document).on('click','.successful-button-error',function () {
        $(".msg-error").hide();
    });

    $(document).on('click','.successful-button',function () {
        $(".msg-successful").hide();
    });
});