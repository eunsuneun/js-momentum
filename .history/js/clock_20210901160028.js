document.addEventListener('DOMContentLoaded', () => {
  const $clock = document.querySelector('.clock');
  const $hour = $clock.querySelector('.hour');
  const $minutes = $clock.querySelector('.minutes');
  $hour.innerHTML = date.getHours();
  $minutes.innerHTML = date.getMinutes();
  function getClock() {
    const date = new Date();
    console.log(`${date.getHours()}:${date.getMinutes}:${}`)
  }
});
