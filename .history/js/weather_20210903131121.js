document.addEventListener('DOMContentLoaded', () => {
  function onGeoOk() {}
  function onGeoError() {
    alert("Can't find you. No weather for you.");
  }
  navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
});
