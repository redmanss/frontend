$(document).ready(function () {
    var proizvoditel = [],
        tip_dvigatelya = [],
        category = [],
        tip_machty = [],
        obem = [],
        shirina_zahvata = [],
        kolichestvo_korpusov = [],
        masInputValue = [],
        masCheckbox = [],
        kondicioner = [],
        gidrofarkop = [],
        moschnost_dvigatelya = [],
        tip = [],
        sort,//параметр сортировки
        strAll = "";//параметр для собирание групы checkBox в строку

    $('.sorting #sort li').click(function () {
        sort = $(this).attr('id');
        url = location.href.split('?')[0];
        url += (url.split('?')[1] ? '' : '?sort=') + sort;
        location.href = url;
    });

    function isEmpty(obj) {
        return Object.keys(obj).length !== 0;
    }

    $('.apply-all').click(function () {

        $('#category input:checkbox:checked').each(function () {
            strAll += $(this).attr('id') + ",";
            category = {
                id: $(this).attr('data-category'),
                value: strAll,
            };
        });

        if (isEmpty(category)) {
            category.value = category.value.slice(0, -1);
            masCheckbox.push(category);
        }

        let categorys = category.value;
        url = location.href.split('?')[0];
        url += (url.split('?')[1] ? '' : '?category=') + categorys;
        location.href = url;
    });

    $('.apply').click(function () {//дія при натиснення відправити
        $('.filter .item').each(function () {
            var firstVal = $(this).find(".input-range-reset .old-for").val();
            var secondVal = $(this).find(".input-range-reset .old-to").val();
            var thisID = $(this).attr('id');
            if (typeof(firstVal) != "undefined") {

                var obj = new Object();
                obj.id = thisID;
                obj.min = firstVal;
                obj.max = secondVal;
                if ((obj.min > 0) || (obj.max > 0)) {
                    if (obj.min < 1) obj.min = 0;
                    if (obj.max < 1) obj.max = 0;
                    masInputValue.push(obj);
                }
            }
        });

        $('#proizvoditel input:checkbox:checked').each(function () {
            strAll += $(this).attr('id') + ",";
            proizvoditel = {
                id: $(this).attr('data-category'),
                value: strAll,
            };
        });
        if (isEmpty(proizvoditel)) {
            proizvoditel.value = proizvoditel.value.slice(0, -1);
            masCheckbox.push(proizvoditel);
        }


        strAll = "";
        $('#tip_dvigatelya input:checkbox:checked').each(function () {
            strAll += $(this).attr('id') + ",";
            tip_dvigatelya = {
                id: $(this).attr('data-category'),
                value: strAll,
            };
        });
        if (isEmpty(tip_dvigatelya)) {
            tip_dvigatelya.value = tip_dvigatelya.value.slice(0, -1);
            masCheckbox.push(tip_dvigatelya);
        }

        strAll = "";

        $('#tip_machty input:checkbox:checked').each(function () {
            strAll += $(this).attr('id') + ",";
            tip_machty = {
                id: $(this).attr('data-category'),
                value: strAll,
            };
        });
        if (isEmpty(tip_machty)) {
            tip_machty.value = tip_machty.value.slice(0, -1);
            masCheckbox.push(tip_machty);
        }

        strAll = "";

        $('#obem input:checkbox:checked').each(function () {
            strAll += $(this).attr('id') + ",";
            obem = {
                id: $(this).attr('data-category'),
                value: strAll,
            };
        });
        if (isEmpty(obem)) {
            obem.value = obem.value.slice(0, -1);
            masCheckbox.push(obem);
        }


        strAll = "";

        $('#shirina_zahvata input:checkbox:checked').each(function () {
            strAll += $(this).attr('id') + ",";
            shirina_zahvata = {
                id: $(this).attr('data-category'),
                value: strAll,
            };
        });
        if (isEmpty(shirina_zahvata)) {
            shirina_zahvata.value = shirina_zahvata.value.slice(0, -1);
            masCheckbox.push(shirina_zahvata);
        }

        strAll = "";

        $('#kolichestvo_korpusov input:checkbox:checked').each(function () {
            strAll += $(this).attr('id') + ",";
            kolichestvo_korpusov = {
                id: $(this).attr('data-category'),
                value: strAll,
            };
        });
        if (isEmpty(kolichestvo_korpusov)) {
            kolichestvo_korpusov.value = kolichestvo_korpusov.value.slice(0, -1);
            masCheckbox.push(kolichestvo_korpusov);
        }

        strAll = "";

        $('#gidrofarkop input:checkbox:checked').each(function () {
            strAll += $(this).attr('id') + ",";
            gidrofarkop = {
                id: $(this).attr('data-category'),
                value: strAll,
            };
        });

        if (isEmpty(gidrofarkop)) {
            gidrofarkop.value = gidrofarkop.value.slice(0, -1);
            masCheckbox.push(gidrofarkop);
        }

        strAll = "";


        $('#kondicioner input:checkbox:checked').each(function () {
            strAll += $(this).attr('id') + ",";
            kondicioner = {
                id: $(this).attr('data-category'),
                value: strAll,
            };
        });

        if (isEmpty(kondicioner)) {
            kondicioner.value = kondicioner.value.slice(0, -1);
            masCheckbox.push(kondicioner);
        }

        strAll = "";


        $('#tip input:checkbox:checked').each(function () {
            strAll += $(this).attr('id') + ",";
            tip = {
                id: $(this).attr('data-category'),
                value: strAll,
            };
        });

        if (isEmpty(tip)) {
            tip.value = tip.value.slice(0, -1);
            masCheckbox.push(tip);
        }
        strAll = "";

        $('#moschnost_dvigatelya input:checkbox:checked').each(function () {
            strAll += $(this).attr('id') + ",";
            moschnost_dvigatelya = {
                id: $(this).attr('data-category'),
                value: strAll,
            };
        });

        if (isEmpty(moschnost_dvigatelya)) {
            moschnost_dvigatelya.value = moschnost_dvigatelya.value.slice(0, -1);
            masCheckbox.push(moschnost_dvigatelya);
        }
        strAll = "";

        var stringUrl = 'filter/';
        Object.keys(masCheckbox).forEach(key => {
            stringUrl += masCheckbox[key].id + '=' + masCheckbox[key].value + ';';
        });
        Object.keys(masInputValue).forEach(key => {
            stringUrl += masInputValue[key].id + '=' + masInputValue[key].min + '-' + masInputValue[key].max + ';';
        });
        stringUrl = stringUrl.slice(0, -1) + '/';

        if (!location.href.split('filter')[1]) {
            _url = location.href.split('?')[0];
        } else {
            _url = location.href.split('filter')[0];
        }
        if (stringUrl != 'filter/') {
            location.href = _url + stringUrl;
        }
    });

    $('.drop').click(function () {//очищення url після натиснення скинути

        if (!location.href.split('filter')[1]) {
            _url = location.href.split('?')[0];
        } else {
            _url = location.href.split('filter')[0];
        }
        if (_url != location.href) {
            location.href = _url;
        }
    });
});