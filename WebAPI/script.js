const x = document.getElementById("demo");
const y = document.getElementById("map");

function getLocation() {
    try {
        navigator.geolocation.getCurrentPosition(showPostion)
        navigator.geolocation.getCurrentPosition(successCallback, errorCallback)
        
    } catch {
        x.innerHTML = err;
    }
}

function showPostion(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude + 
    "<br> Longitude: " + position.coords.longitude;
}
function successCallback(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    embedGoogleMap(latitude, longitude);
}

function errorCallback(error) {
    console.error("Error obtaining location: ", error.message);
}
function embedGoogleMap(lat, lng) {
    const iframe = document.createElement("iframe");
    const zoomLevel = 15;
    const apiKey = "AIzaSyBcC2ZGMOkvrtnhh4uxliqPZiJnurcotRo";
    const src = `https://www.google.com/maps/embed/v1/view?key=${apiKey}&center=${lat},${lng}&zoom=${zoomLevel}`;

    iframe.src = src;
    iframe.width = "600";
    iframe.height = "450";
    iframe.style.border = "0";
    iframe.allowFullscreen = true;
    iframe.loading = "lazy";

    y.appendChild(iframe)
}


