document.addEventListener('DOMContentLoaded', () => {
  function onGeoOk() {}
  function onGeoError() {
    alert("Can't find you. N")
  }
  navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
});
