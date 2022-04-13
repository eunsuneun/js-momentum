document.addEventListener('DOMContentLoaded', () => {
  const $todoForm = document.querySelector('.todo');
  const $todoIpt = $todoForm.querySelector('input');
  const $todoLst = document.querySelector('.todo-lst');
  function onTodoSubmit(event) {
    event.preventDefault();
    const newTodo = $todoIpt.value;
    $todoIpt.value = '';
    console.log(newTodo);
    const $todoItm = document.createElement('li');
    $todoLst.appendChild($todoItm);
    $
  }
  $todoForm.addEventListener('submit', onTodoSubmit);
});
