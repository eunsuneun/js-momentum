document.addEventListener('DOMContentLoaded', () => {
  const $loginForm = document.querySelector('.login-form');
  const $loginInput = $loginForm.querySelector('input');
  const $loginButton = $loginForm.querySelector('button');
  $loginForm.style.background = 'red';
  $loginInput.style.background = 'red';
  $loginButton.style.background = 'red';
  function onLogintnClick() {
    const value = $loginInput.value;
    if (value === '') console.log('please write your name');
    else console.log('hi');
  }
  $loginButton.addEventListener('click', onLogintnClick);
});
