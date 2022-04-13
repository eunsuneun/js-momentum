document.addEventListener('DOMContentLoaded', () => {
  function onGeoOk() {}
  function onGeoError() {
    alert("Can't find you. ")
  }
  navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
});
