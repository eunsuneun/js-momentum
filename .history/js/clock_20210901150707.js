document.addEventListener('DOMContentLoaded', () => {
  const $clock = document.querySelector('.clock');
  $clock.innerText = 'Please write your name !';
  function sayHello() {
    console.log('hello');
  }
  setInterval(sayHello, interval);(sayHello, 2000);
});
