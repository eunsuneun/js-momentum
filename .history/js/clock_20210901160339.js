document.addEventListener('DOMContentLoaded', () => {
  const $clock = document.querySelector('.clock');
  const $hour = $clock.querySelector('.hour');
  const $minutes = $clock.querySelector('.minutes');
  function getClock() {
    const date = new Date();
    console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
  }
  getClock();
  setInterval(getClock, 1000);
});
