document.addEventListener('DOMContentLoaded', () => {
  const $todoForm = document.querySelector('.todo');
  const $todoIpt = $todoForm.querySelector('input');
  const $todoLst = document.querySelector('.todo-lst');
  function onTodoSubmit(event) {
    event.preventDefault();
    $todoIpt
  }
  $todoForm.addEventListener('submit', onTodoSubmit);
});
