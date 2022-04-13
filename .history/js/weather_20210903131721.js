document.addEventListener('DOMContentLoaded', () => {
  function onGeoOk() {
    console.log(position)
  }
  function onGeoError() {}
  navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
});
