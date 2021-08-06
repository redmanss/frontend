$(function(){
    var valmin = $( "input#minCost" ).val();
    var valmax = $( "input#maxCost" ).val();
    
$("#slider").slider({
	range: true,
	values: [valmin,valmax],
	stop: function(event, ui) {
		$("input#minCost").val($("#slider").slider("values",0));
		$("input#maxCost").val($("#slider").slider("values",1));
        $("[data-minPrice]").html($("#slider").slider("values",0));
        $("[data-maxPrice]").html($("#slider").slider("values",1));
    },
    slide: function(event, ui){
		$("input#minCost").val($("#slider").slider("values",0));
		$("input#maxCost").val($("#slider").slider("values",1));
        $("[data-maxPrice]").html($("#slider").slider("values",0));
        $("[data-minPrice]").html($("#slider").slider("values",1));
    }
	});
$("[data-maxPrice]").html(valmax);
$("[data-minPrice]").html(valmin);
$("#slider").slider( "option", "max", valmax );
});

$("input#minCost").change(function(){
	var value1=$("input#minCost").val();
	var value2=$("input#maxCost").val();
    if(parseInt(value1) > parseInt(value2)){
		value1 = value2;
		$("input#minCost").val(value1);
	}
	$("#slider").slider("values",0,value1);	
	});
$("input#maxCost").change(function(){
	var value1=$("input#minCost").val();
	var value2=$("input#maxCost").val();
	if (value2 > 999999) { value2 = 999999; $("input#maxCost").val(999999)}
	if(parseInt(value1) > parseInt(value2)){
		value2 = value1;
		$("input#maxCost").val(value2);
	}
	$("#slider").slider("values",1,value2);
});
