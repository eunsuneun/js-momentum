document.addEventListener('DOMContentLoaded', () => {
  const $loginForm = document.querySelector('.login-form');
  const $loginInput = $loginForm.querySelector('input');
  const $loginButton = $loginForm.querySelector('button');
  $loginForm.style.background = 'red';
  $loginInput.style.background = 'red';
  $loginButton.style.background = 'red';
  function onLogintnClick() {
    console.dir($loginInput);
  }
  $loginButton.addEventListener('click', onLogintnClick);
  var obj = {};
  console.log(obj);
  obj.a = 1;
  console.log(obj);
});