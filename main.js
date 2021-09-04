
mymap = this.document.getElementById('mymap');

function getourlocation() {
    //1 check geolocation availability
    if (navigator.geolocation) {
        // 2- take permission : getCurrentPosition
        navigator.geolocation.getCurrentPosition(getposition, errorhandeler);

    } else {
        mymap.innerText = "there is a problem with your browser";
    }
}
function getposition(position) {
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;

/* steps to deal with Google */
    var location = new google.maps.LatLng(lat, lon);

    //2- create specs
    var mapspecs = {
        center: location,
        zoom: 17
    };
    //3- display map inside mydiv
    new google.maps.Map(mymap, mapspecs);



    //alert("Success");
}
function errorhandeler(error) {

    switch (error.code) {
        case error.PERMISSION_DENIED:
            mymap.innerText = "You Have To Give Permission To Be Able To Access All Features !";
            break;
        case error.POSITION_UNAVAILABLE:
            mymap.innerText = "Your Location is unavailable !";
            break;
        case error.TIMEOUT:
            mymap.innerText = "Timeout !";
            break;
        case error.UNKOWN_ERROR:
            mymap.innerText = "There is unknown error !";
            break;
    }
}

function displayinfo(){
    
    mymap.innerText = "latitude is "    
}