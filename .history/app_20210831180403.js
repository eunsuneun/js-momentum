document.addEventListener('DOMContentLoaded', () => {
  const $loginForm = document.querySelector('.login-form');
  const $loginInput = $loginForm.querySelector('input');
  const $loginButton = $loginForm.querySelector('button');
  const $greeting = $loginForm.querySelector('.greeting');
  const $alertTxt = $loginForm.querySelector('.alert-txt');
  const HIDDEN_CLASS = 'hidden';
  $alertTxt.style.color = 'red';

  function onLoginSubmit(event) {
    event.preventDefault();
    const userName = $loginInput.value;
    if (userName === '') {
      // return ($alertTxt.textContent = 'please write your name !');
    }
    // if (userName.length > 15) return console.log('your name is too long');
    // $loginForm.classList.add(HIDDEN_CLASS);
    // $greeting.textContent = `Hello ${userName}`;
    // $greeting.classList.remove(HIDDEN_CLASS);
  }
  $loginForm.addEventListener('submit', onLoginSubmit);
});
