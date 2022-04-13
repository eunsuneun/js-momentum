document.addEventListener('DOMContentLoaded', () => {
  const $loginForm = document.querySelector('.login-form');
  const $loginInput = $loginForm.querySelector('input');
  const $loginButton = $loginForm.querySelector('button');
  const $greeting = document.querySelector('.greeting');
  const $alertTxt = document.querySelector('.alert-txt');
  const HIDDEN_CLASS = 'hidden';

  function onLoginSubmit(event) {
    event.preventDefault();
    const userName = $loginInput.value;
    if (userName === '') {
      $alertTxt.classList.remove(HIDDEN_CLASS);
      $alertTxt.innerText = 'please write your name !';
    }
    if (userName.length > 15) {
      $alertTxt.classList.remove(HIDDEN_CLASS);
    }
    // $loginForm.classList.add(HIDDEN_CLASS);
    // $greeting.textContent = `Hello ${userName}`;
    // $greeting.classList.remove(HIDDEN_CLASS);
  }
  $loginForm.addEventListener('submit', onLoginSubmit);
});
