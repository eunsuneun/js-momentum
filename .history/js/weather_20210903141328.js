document.addEventListener('DOMContentLoaded', () => {
  const API_KEY = '991677fedf714820d800abcd0a3494e1';
  function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log(`You live in ${lat} ${lng}`);

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=37.7243987&lon=126.7100541&appid=991677fedf714820d800abcd0a3494e1`
  }
  function onGeoError() {
    console.log("Can't find you. No weather for you.");
  }
  navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
});
