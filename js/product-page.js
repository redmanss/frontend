$(document).ready(function() {
    //
    Fancybox.bind("[data-fancybox]");
    //--- Generate Com
    $('.generate-com-button').click(function(){
        $('.generate-com-modal').show()
        $('body').addClass('block-body')
    })
    $('.close-generate-com-modal').click(function() {
        $('.generate-com-modal').hide()
        $('body').removeClass('block-body')
    })
})