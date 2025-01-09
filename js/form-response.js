$(document).ready(function(){
    $('.close-successful-block').click(function (){
        $('.successful-block').hide()
    })
    //
    $("#options").change(function () {
        if ($(this).val() === "show") {
          $("#textarea").show();
        } else {
          $("#textarea").hide();
        }
      });
})

