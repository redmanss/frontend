 var map;
        function initMap() {
            map = new google.maps.Map(document.getElementById('map'), {
                center: {lat: 50.230, lng: 28.810749},
                zoom: 14,
				styles: [{"featureType": "administrative.country","elementType": "labels.text","stylers": [{"visibility": "off"}]}]
            	});
		var marker = new google.maps.Marker({
    		position: {lat: 50.223056, lng: 28.810749},
    		map: map,
			icon: 'img/icon/location.svg',
			title: 'А.ТОМ'
			});
    	var contentString = '<div id="content">'+
          '<div class="google-map">'+
          '<p>А.ТОМ</p>'+
		  '<p>Украина, Житомирская обл., с. Левков, Лесная 100</p>'+
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
