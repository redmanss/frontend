$(document).ready(function(){
    // Mob-Menu
        $('.header-mob-menu').click(function(){
            $(".mob-menu-modal").fadeIn(200)
            $(".mob-menu-block").animate({
                left: 0
            })
        })
        $('.close-mob-menu-modal').click(function(){
            $(".mob-menu-modal").fadeOut(200)
            $(".mob-menu-block").animate({
                left: -650
            })
        })
    // lang
        $(".language-block").click(function() {
            $('.language-block-drop').slideToggle(100)
            });

        $(document).on('click', function(e) {
        if (!$(e.target).closest(".language-block, .language-block-drop").length) {
            $('.language-block-drop').hide()
        }
            e.stopPropagation()
        })
  })