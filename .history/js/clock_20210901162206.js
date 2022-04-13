document.addEventListener('DOMContentLoaded', () => {
  const $clock = document.querySelector('.clock');
  function getClock() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getHours();
    $clock.innerHTML = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  }
  getClock();
  setInterval(getClock, 1000);
});
