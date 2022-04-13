document.addEventListener('DOMContentLoaded', () => {
  const $clock = document.querySelector('.clock');
  const $hour = $clock.querySelector('.hour');
  const $minutes = $clock.querySelector('.minutes');
  const date = new Date();
  $hour.innerHTML = date.getHours();
  $minutes.innerHTML = date.getMinutes();
  function getClock(){}
  
});
