document.addEventListener('DOMContentLoaded', () => {
  const $loginForm = document.querySelector('.login-form');
  const $loginInput = $loginForm.querySelector('input');
  const $loginButton = $loginForm.querySelector('button');
  const $greeting = document.querySelector('.greeting');
  const $alertTxt = document.querySelector('.alert-txt');
  const HIDDEN_CLASS = 'hidden';
  const USERNAME_KEY = 'userName';

  function onLoginSubmit(event) {
    event.preventDefault();
    const userName = $loginInput.value;
    if (userName === '') {
      $alertTxt.innerText = 'Please write your name !';
      $alertTxt.classList.remove(HIDDEN_CLASS);
      return;
    }
    if (userName.length > 15) {
      $alertTxt.innerText = 'Your name is too long !';
      $alertTxt.classList.remove(HIDDEN_CLASS);
      return;
    }
    $loginForm.classList.add(HIDDEN_CLASS);
    $alertTxt.classList.add(HIDDEN_CLASS);
    localStorage.setItem(USERNAME_KEY, userName);
    $greeting.textContent = `Hello ${userName}`;
    $greeting.classList.remove(HIDDEN_CLASS);
  }

  const savedUsername = localStorage.getItem(USERNAME_KEY);
  if (!savedUsername) {
    // show the form
    $loginForm.classList.remove(HIDDEN_CLASS);
    $loginForm.addEventListener('submit', onLoginSubmit);
  } else {
    // show the greeting
    $loginForm.classList.add(HIDDEN_CLASS);
    $greeting.classList.remove(HIDDEN_CLASS);
  }
});
