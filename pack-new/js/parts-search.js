$(document).on('click', '.n-parts-search .basket-add', function () {
        let $dataavailability = parseInt($(this).parents('.n-modal-item-quantity').find('.basket-availability').attr("data-availability"));
        let count = Number($(this).parent().find('.quantity-num').val());

        if ($dataavailability > count) {
            let $quantityNum = $(this).parent().find('.quantity-num');
            $quantityNum.val(+$quantityNum.val() + 1);
        }
});

$(document).on('blur', '.quantity-num-search', function () {
    let $dataavailability = parseInt($(this).parents('.n-modal-item-quantity').find('.basket-availability').attr("data-availability"));
    let countInput = parseInt($(this).val());
    if ((countInput <= $dataavailability) && (countInput > 0)) {
        $(this).val(countInput);
    } else {
        $(this).val(1);
    }
});

//удалить 1 с корзины
$(document).on('click', '.n-parts-search .basket-del', function () {
    let count = $(this).parent().find('.quantity-num').val();
    let id = $(this).attr("data-id");
    if (count > 1) {
        $.ajax({
            type: 'GET',
            url: '/cart/ajax-decrement/?id=' + id,
            success: function (data) {
                $('#price-all').text(data);
                $.ajax({
                    type: 'GET',
                    url: '/cart/count-variation/',
                    success: function (data) {
                        $('#basket-number span').text(data);
                    }
                });
            }
        });
        let $quantityNum = $(this).parent().find('.quantity-num');
        $quantityNum.val(+$quantityNum.val() - 1);
    }
});
