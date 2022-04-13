document.addEventListener('DOMContentLoaded', () => {
  const $clock = document.querySelector('.clock');
  function getClock() {
    const date = new Date();
    const hours = date.getHours().padStart(2, '0');
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    $clock.innerHTML = `${hours}:${minutes}:${date.getSeconds()}`;
  }
  getClock();
  setInterval(getClock, 1000);
});
