// ------------------ ONE CLICK
$(".one-click-but").click(function () {
    $(".one-click-modal").show();
});
$(".close-one-click, .one-click-send").click(function () {
    $(".one-click-modal").hide();
});
//--
$(".one-click-inp").mask("+380 (99) 9999999", {
    completed: function(){ $(this).attr("data-oneclickphone", this.val()) }
});
// -------------------- END CLICK