document.addEventListener('DOMContentLoaded', () => {
  const $todoForm = document.querySelector('.todo');
  const $todoIpt = $todoForm.querySelector('input');
  const $todoLst = document.querySelector('.todo-lst');
  function onTodoSubmit(event) {
    event.preventDefault();
    const newTodo = $todoIpt.value;
    $todoIpt.value = '';
  }
  $todoForm.addEventListener('submit', onTodoSubmit);
});
