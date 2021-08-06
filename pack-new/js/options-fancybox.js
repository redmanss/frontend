$(function() {
    // FANCYBOX OPTION
$('[data-fancybox="gallery"], [data-fancybox="rent"]').fancybox({
        thumbs : {
            autoStart : false,
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