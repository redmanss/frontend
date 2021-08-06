$( document ).ready(function() {

    $(document).on('click', '.successful-button-error', function () {
        $(".msg-error").hide();
    });

    $(document).on('click', '.successful-button', function () {
        $(".msg-successful").hide();
    });

    $('#send-company').click(function(){
        var nameUser = $('#userName').val();
        var emailUser = $('#userEmail').val();
        var phoneUser = $('#userPhone').val();
        var textMessage = $('#userMessage').val();

        $.ajax({
            url: '/site/send-company/',
            type: 'GET',
            cache: true,
            data: {
                nameUser: nameUser,
                emailUser: emailUser,
                phoneUser: phoneUser,
                textMessage: textMessage
            },
            success: function (data) {
                if (data == '0') {
                    $(".msg-successful").css({
                        display: 'flex'
                    });
                }
            }
        });
    });

/*    $(document).on('click','.ncb-send',function () {
        var nameUser = $('#name').val();
        var emailUser = $('#email').val();
        var phoneUser = $('#phone').val();
        var textMessage = $('#message').val();
        var emailManager = $('#emailman').text();

        $.ajax({
            url: '/site/send-manager/',
            type: 'GET',
            cache: true,
            data: {
                nameUser: nameUser,
                emailUser: emailUser,
                phoneUser: phoneUser,
                emailManager: emailManager,
                textMessage: textMessage
            },
            success: function (data) {
                if (data == '0') {
                    $(".msg-successful").css({
                        display: 'flex'
                    });
                } else {
                    $(".msg-error").css({
                        display: 'flex'
                    });
                }
            }
        });
    });*/

    $('.connection .email').click(function(){
        let idManager = $(this).attr('id');
        let language = $('#foo_label').html();
        let url = '/site/manager-information/';
        if (language!='ru') url = '/'+language+'/site/manager-information/';
        $.ajax({
            url: url,
            type: 'GET',
            data: {
                id: idManager,
                language: language
            },
            success: function (data) {
                document.querySelector(".n-consultation-block").innerHTML = data;
                $(".n-consultation-block").css({
                    display: 'block'
                });
            }
        });
    });


});