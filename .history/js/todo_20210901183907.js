document.addEventListener('DOMContentLoaded', () => {
  const $todoForm = document.querySelector('.todo');
  const 
  const $todoLst = document.querySelector('.todo-lst');
  function onTodoSubmit(event) {
    event.preventDefault();
  }
  $todoForm.addEventListener('submit', onTodoSubmit);
});
