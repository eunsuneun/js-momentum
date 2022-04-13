document.addEventListener('DOMContentLoaded', () => {
  function onGeoOk(position) {
    console.log(position);
  }
  function onGeoError() {
    console.log("Can't find you. ")
  }
  navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
});
