document.addEventListener('DOMContentLoaded', () => {
  const $clock = document.querySelector('.clock');
  function getClock() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    $clock.innerHTML = `${hours}:${minutes}:${seconds}`;
  }
  getClock();
  setInterval(getClock, 1000);
});
