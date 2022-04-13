document.addEventListener('DOMContentLoaded', () => {
  function onGeoOk() {}
  function onGeoError() {
    alert('Can't find )
  }
  navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
});
