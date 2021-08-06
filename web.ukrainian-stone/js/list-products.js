// open-filter
$('.open-filter').click(function(){
    $('.sidebar').show();
    $('.bg-dark').show();
    $('body').css({overflow: "hidden"});
});
//close-filter
$(".close-filter").click(function(){
    $(".sidebar").hide();
    $('.bg-dark').hide();
    $('body').css({overflow: "auto"});
});
/*---- chose filter-----------------------------------*/
$('.all-filters').click(function() {
    $('.chose-filter-list li').css({display: 'inline-block'});
    $(this).css({display: 'none'});
    $('.hover-filters').css({display: 'inline-block'});
});
$('.hover-filters').click(function(){
    $('.chose-filter-list li:nth-child(3)').nextAll().css({display: 'none'});
    $(this).css({display: 'none'});
    $('.all-filters').css({display: 'inline-block'});
});
/*---- END chose filter-----------------------------------*/