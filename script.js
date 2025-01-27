const findRouteButton = document.getElementById('findRoute');

findRouteButton.addEventListener('click', () => {
    console.log("Button clicked"); 

    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                console.log("Location obtained");
                const userLat = position.coords.latitude;
                const userLng = position.coords.longitude;

                // Replace with your desired destination coordinates
                const destinationLat = 28.749964; 
                const destinationLng = 77.529547; 

                // Construct the Google Maps URL
                const googleMapsUrl = 'https://maps.google.com/maps?saddr=${userLat},${userLng}&daddr=${destinationLat},${destinationLng}'; 

                // Redirect to the Google Maps URL
                window.location.href = googleMapsUrl; 
            },
            (error) => {
                console.error("Error getting location:", error.message);
            }
        );
    } else {
        alert("Geolocation is not supported by your browser.");
    }
});
