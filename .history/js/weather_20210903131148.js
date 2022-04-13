document.addEventListener('DOMContentLoaded', () => {
  function onGeoOk(position) {}
  function onGeoError() {
    alert("Can't find you. No weather for you.");
  }
  navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
});
