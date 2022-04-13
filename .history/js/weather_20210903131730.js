document.addEventListener('DOMContentLoaded', () => {
  function onGeoOk(position) {
    console.log(position);
  }
  function onGeoError() {
    console.log(C)
  }
  navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
});
