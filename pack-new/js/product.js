$(document).ready(function () {

    $(document).on('click', '.successful-button-error', function () {
        $(".msg-error").hide();
    });

    $(document).on('click', '.successful-button', function () {
        $(".msg-successful").hide();
    });

    $(document).on('click', '.rent-button', function () {
        let idManager = $('#manager-rent-id').html();
        let language = $('#foo_label').html();
        let idCategory = 0;
        let url = '/products/ajax/';
        if (language == 'ru') url = '/products/ajax/';
        else url = '/' + language + '/products/ajax/';
        $.ajax({
            url: url,
            type: 'GET',
            data: {
                idCategory: idCategory,
                idManager: idManager,
                language: language
            },
            success: function (data) {
                document.querySelector(".n-consultation-block").innerHTML = data;
                $(".n-consultation-block").css({
                    display: 'block'
                });
                $("body").addClass("block-body");
            }
        });
    });

    $(document).on('click', '.consultation', function () {
        $("body").addClass("block-body");
    });

    $(document).on('click', '.change-manager', function () {
        let idCategory = $('#cat').html();
        let idManager = $('.ncb-name').attr("data-manager");
        let language = $('#foo_label').html();
        let url = '/products/ajax/';
        if (language == 'ru') url = '/products/ajax/';
        else url = '/' + language + '/products/ajax/';
        $.ajax({
            url: url,
            type: 'GET',
            data: {
                idCategory: idCategory,
                idManager: idManager,
                language: language
            },
            success: function (data) {
                document.querySelector(".n-consultation-block").innerHTML = data;
                $("body").addClass("block-body");
            }
        });
    });

    $(document).on("click", '.print-button', function () {
        let idManager = $('.manager-name').attr("id");
        if (idManager == undefined) {
            idManager = $('#manager-id').html();
        }
        let alias = $(this).attr("id");
        let language = $('#foo_label').html();

        window.open('https://pack-trade.com/product/print/' + alias + '/' + idManager + '/' + language + '/', '_blank');

    });

});
$(function () {
    // FANCYBOX OPTION
    $('[data-fancybox="gallery"]').fancybox({
        thumbs: {
            autoStart: false,
        },
        buttons: [
            "zoom",
            //"share",
            //"slideShow",
            //"fullScreen",
            //"download",
            "thumbs",
            "close",
        ],
        backFocus: false,
        autoFocus: false,
        trapFocus: false,
        loop: true,
    });
//
});