(function($) {
    var re = /([^&=]+)=?([^&]*)/g;
    var decodeRE = /\+/g;  // Regex for replacing addition symbol with a space
    var decode = function (str) {return decodeURIComponent( str.replace(decodeRE, " ") );};
    $.parseParams = function(query) {
        var params = {}, e;
        while ( e = re.exec(query) ) {
            var k = decode(e[1]), v = decode(e[2]);
            k = k.substring(0, k.indexOf('[') + 1) + k.substring(k.indexOf(']')); // вирізаємо індекс між дужками
            if (k.substring(k.length - 2) === '[]') {
                k = k.substring(0, k.length - 2);
                (params[k] || (params[k] = [])).push(v);
            }
            else params[k] = v;
        }
        return params;
    };
})(jQuery);


$(document).ready(function () {
    $(document).on('click', '.checkbox-list', function () {
        if (typeof location.href.split('/f/')[1]== "undefined") {
            location.href = location.href + 'f/' + $(this).attr("data-property-valuekey") + '/';
        }else{
            _url = location.href.split('/f/')[0];
            location.href = _url + '/f/' + $(this).attr("data-property-valuekey") + '/';
        }
    });
});
