function konumBul() {
    if (navigator.geolocation) {
        console.log('Geolocation destekliyor.')
        navigator.geolocation.getCurrentPosition(function (data) {
            console.log(data);
            var directionsService = new google.maps.DirectionsService();
            var directionsRenderer = new google.maps.DirectionsRenderer();
            const evKonum = {
                lat: 40.949072630271246,
                lng: 29.122037907870357
            }
            const konum = {
                lat: data.coords.latitude,
                lng: data.coords.longitude
            };
            const haritaDiv = document.getElementById('map');
            const googleMap = new google.maps.Map(haritaDiv, {
                center: konum,
                zoom: 15,
                mapTypeId: 'satellite' //uydu görüntüsü sağlıyor.
            });
            const marker = new google.maps.Marker({
                position: evKonum,
                map: googleMap,
                title: 'Şu an buradasınız.'
            });
            const map = new google.maps.Map(document.getElementById("map"), {
                zoom: 14,
                center: { lat: 42.3726399, lng: -71.1096528 },
              });
              const bikeLayer = new google.maps.BicyclingLayer();
            
              bikeLayer.setMap(map);
            
            const map2 = new google.maps.Map(document.getElementById("map2"), {
                zoom: 13,
                center: { lat: 41.044777, lng: 29.007202 },
              });
              const trafficLayer = new google.maps.TrafficLayer();
            
              trafficLayer.setMap(map2);
            
            
            // directionsRenderer.setMap(googleMap);

            // directionsService
            // .route({
            //     origin: konum,
            //     destination: evKonum,
            //     travelMode: google.maps.TravelMode.DRIVING,
            // })
            // .then((response)) => {
            //     directionsRenderer.setDirections(response);
            // })
            // .catch((e) => 
            // window.alert("Directions request failed due to " + status)
            // );



        }), function (error) {
            alert(error.message);
        }
    } else {
        alert('Geolocation desteklemiyor!')
    }

}

konumBul();