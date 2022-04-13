document.addEventListener('DOMContentLoaded', () => {
  const $loginForm = document.querySelector('.login-form');
  const $loginInput = $loginForm.querySelector('input');
  const $loginButton = $loginForm.querySelector('button');

  function onLoginSubmit(event) {
    event.preventDefault();
    const userName = $loginInput.value;
    if (userName === '') return console.log('please write your name');
    if (userName.length > 15) console.log('your name is too long');
      console.log(userName);
      $loginForm.classList.add('hidden');
  }
  $loginForm.addEventListener('submit', onLoginSubmit);
  const $a = document.querySelector('a');
  $a.addEventListener('click', e => e.preventDefault());
});
