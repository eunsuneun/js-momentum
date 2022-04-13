document.addEventListener('DOMContentLoaded', () => {
  const $clock = document.querySelector('.clock');
  function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, '0');
    const seconds = date.getSeconds().padStart(2, '0');
    $clock.innerHTML = `${hours}:${minutes}:${seconds}`;
    const minutes = String(date.getMinutes().padStart(2, '0');
  }
  getClock();
  setInterval(getClock, 1000);
});
