function initMap() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      position => {
        const userLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };

        const map = new google.maps.Map(document.getElementById("map"), {
          center: userLocation,
          zoom: 15,
        });

        new google.maps.Marker({
          position: userLocation,
          map: map,
          title: "You are here",
        });
      },
      () => alert("Location access denied.")
    );
  } else {
    alert("Geolocation not supported.");
  }
}

document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const pickup = document.getElementById("pickup").value.trim();

  if (name && email && pickup) {
    alert("Booking submitted! We will contact you shortly.");
    document.getElementById("form").reset();
  } else {
    alert("Please fill in all fields.");
  }
});
