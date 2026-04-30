
mapboxgl.accessToken = "pk.eyJ1IjoiZmxpZ2h0ZWFtc3RhbmR1cCIsImEiOiJjbThyamw3azQweW9iMmtvbWM4N3Bhc2o0In0.fywVictmDFWXM_M_LhlnQA";

const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [0, 0],
  zoom: 2
});

function setMapCenter() {
  const long = parseFloat(document.getElementById('longitude').value);
  const lat = parseFloat(document.getElementById('latitude').value);

  if (isNaN(long) || isNaN(lat) || long < -180 || long > 180 || lat < -90 || lat > 90) {
    alert('Please enter valid coords.');
    return;
  }

 
  const coordinates = new mapboxgl.LngLat(long, lat);

  map.flyTo({
    center: coordinates,
    zoom: 15
  });
}
