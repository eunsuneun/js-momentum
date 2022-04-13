document.addEventListener('DOMContentLoaded', () => {
  function onGeoOk() {}
  function onGeoError() {
    alert("")
  }
  navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
});
