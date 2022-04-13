document.addEventListener('DOMContentLoaded', () => {
  const $loginForm = document.querySelector('.login-form');
  const $loginInput = $loginForm.querySelector('input');
  const $loginButton = $loginForm.querySelector('button');
  $loginForm.style.background = 'red';
  $loginInput.style.background = 'red';
  $loginButton.style.background = 'red';
  function onLogintnClick() {
    console.dir($loginInput.value);
  }
  $loginButton.addEventListener('click', onLogintnClick);

  var arr = [];
  console.dir(arr, arr.length);
  // 복잡한 코드가 있다고 가정
  setTimeout(function () {
    // 비동기 가정
    arr.push(5);
  }, 0);
});
