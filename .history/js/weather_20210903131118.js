document.addEventListener('DOMContentLoaded', () => {
  function onGeoOk() {}
  function onGeoError() {
    alert("Can't find you. No w")
  }
  navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
});
