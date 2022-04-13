document.addEventListener('DOMContentLoaded', () => {
  const $loginForm = document.querySelector('.login-form');
  const $loginInput = $loginForm.querySelector('input');
  const $loginButton = $loginForm.querySelector('button');
  $loginForm.style.background = 'red';
  $loginInput.style.background = 'red';
  $loginButton.style.background = 'red';
  function onLogintnClick() {
    const userName = $loginInput.userName;
    if (userName === '') console.log('please write your name');
    else if() console.log(userName);
  }
  $loginButton.addEventListener('click', onLogintnClick);
});
