document.addEventListener('DOMContentLoaded', () => {
  const $loginForm = document.querySelector('.login-form');
  const $loginInput = $loginForm.querySelector('input');
  const $loginButton = $loginForm.querySelector('button');
  $loginForm.style.background = 'red';
  $loginInput.style.background = 'red';
  $loginButton.style.background = 'red';
  function onLogintnClick() {
    let inputVal = '';
    $loginInput.addEventListener('change', () => {
      inputVal = $loginInput.value;
    });
    console.log(inputVal);
  }
  $loginInput.addEventListener('change', () => {
    inputVal = $loginInput.value;
  });
  $loginButton.addEventListener('click', onLogintnClick);
});
