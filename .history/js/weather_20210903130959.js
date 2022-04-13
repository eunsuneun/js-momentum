document.addEventListener('DOMContentLoaded', () => {
  function onGeoOk(){}
  function onGeoError(){}
  navigator.geolocation.getCurrentPosition(onGeoOk,onGeoOk);
});
