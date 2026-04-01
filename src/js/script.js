mapboxgl.accessToken = ' ACCESS TOKEN ';

const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [0, 0], 
  zoom: 2
});

function setMapCenter() {

  const long = parseFloat(      );
  const lat = parseFloat(       );

  if (!isNaN(long) && !isNaN(lat)) {

    map.flyTo({
      center: "",
      zoom: 12  // Optional: Adjust zoom level if needed
    });

  } else {
    alert("Please enter valid coordinates.");
  }
}