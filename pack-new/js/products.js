$(document).ready(function () {
    var inProcess = false;
    var count = 24;

    $(window).scroll(function () {
        let windowHeight = $(window).height() *0.6;
        let top = $(document).scrollTop();
        if (top >= windowHeight && !inProcess) {
            var language = $('#foo_label').html();
            let countProduct = $('#count-product').html();
            var sort = null;
            try {
                sort = document.location.href.split('?')[1].split('=')[1];
            } catch (e) {
                sort = null
            }
            if (countProduct > (count - 12)) {
                if (location.pathname.indexOf("/filter/") == -1) {
                    $.ajax({
                        url: location.pathname + count + '/',
                        method: 'GET',
                        data: {
                            "language": language,
                            "sort": sort,
                        },
                        beforeSend: function () {
                            inProcess = true;
                        }
                    }).done(function (data) {
                        $(".list-equipment .row").last().append(data);
                        inProcess = false;
                        count += 12;
                    });
                }
            }

        }
    });
});

$(document).on('click', '.successful-button-error', function () {
    $(".msg-error").hide();
});

$(document).on('click', '.successful-button', function () {
    $(".msg-successful").hide();
});

$('.consultation').click(function () {
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