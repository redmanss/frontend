$(function(){
    $(".cpmti-title-block").click(function() {
        $(this).toggleClass("active-cp-manager");
        $(this).parent().find(".cp-manager-item-block").slideToggle(300);
    });
});
