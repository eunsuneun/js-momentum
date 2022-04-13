document.addEventListener('DOMContentLoaded', () => {
  const $clock = document.querySelector('.clock');
  const $hour = $clock.querySelector('.hour');
  const $minutes = $clock.querySelector('.minutes');
  function getClock() {
    const date = new Date();
    console.log(
      `${date.getHours()}:${date.getMinutes()}:${date.getMilliseconds}`
    );
  }
  setInterval(getClock, 1000);
});
