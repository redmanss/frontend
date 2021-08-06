var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 50.293599, lng: 28.702393},
        zoom: 14,
        styles: [{"featureType": "administrative.country","elementType": "labels.text","stylers": [{"visibility": "off"}]}]
        });
var marker = new google.maps.Marker({
    position: {lat: 50.293599, lng: 28.702393},
    map: map,
    icon: '../n-img/location.svg',
    title: 'PACK-TRADE'
    });
var contentString = '<div id="content">'+
  '<div class="google-map">'+
  '<p>PACK-TRADE</p>'+
  '<p>Украина, г. Житомир, Коростышевская, 45</p>'+
  '</div>';
var infowindow = new google.maps.InfoWindow({
       content: contentString,
       maxWidth: 250
});
    infowindow.open(map, marker);
    marker.addListener('click', function() {
    infowindow.open(map, marker);
});	
}
