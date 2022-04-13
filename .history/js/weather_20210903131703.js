document.addEventListener('DOMContentLoaded', () => {
  function onGeo
  navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
});
