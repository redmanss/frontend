$('.nhb-item-info').click(function() {
    $(this).next().toggle();
    $(this).find('.nhb-toggle-block').toggleClass('nhb-toggle-block-hover');
});