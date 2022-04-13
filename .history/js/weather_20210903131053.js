document.addEventListener('DOMContentLoaded', () => {
  function onGeoOk() {}
  function onGeoError() {
    alert('cant')
  }
  navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
});
