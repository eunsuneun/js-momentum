document.addEventListener('DOMContentLoaded', () => {
  const $loginForm = document.querySelector('.login-form');
  const $loginInput = $loginForm.querySelector('input');
  const $loginButton = $loginForm.querySelector('button');
  $loginForm.style.background = 'red';
  $loginInput.style.background = 'red';
  $loginButton.style.background = 'red';
  function onLogintnClick() {
    const username = $loginInput.username;
    if (username === '') console.log('please write your name');
    else if() console.log(username);
  }
  $loginButton.addEventListener('click', onLogintnClick);
});
