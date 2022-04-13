document.addEventListener('DOMContentLoaded', () => {
  function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.latitude;
    console.log(position);
  }
  function onGeoError() {
    console.log("Can't find you. No weather for you.");
  }
  navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
});
