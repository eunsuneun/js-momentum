document.addEventListener('DOMContentLoaded', () => {
  navigator.geolocation.getCurrentPosition(onGeoOk, onGeo)
});
