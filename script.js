const findRouteButton = document.getElementById('findRoute');

findRouteButton.addEventListener('click', () => {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const userLat = position.coords.latitude;
                const userLng = position.coords.longitude;

                // Replace with your desired destination coordinates
                const destinationLat = 28.749571; 
                const destinationLng = 77.529196; 

                // Construct the Google Maps URL
                const googleMapsUrl = 'https://www.google.com/maps/dir/?api=1&origin=${userLat},${userLng}&destination=${destinationLat},${destinationLng}';

                // Redirect to the Google Maps URL
                window.location.href = googleMapsUrl;
            },
            (error) => {
                alert("Error getting location: " + error.message);
            }
        );
    } else {
        alert("Geolocation is not supported by your browser.");
    }
});
