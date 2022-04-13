document.addEventListener('DOMContentLoaded', () => {
  const $todoForm = document.querySelector('.todo');
  const $todoIpt = $todoForm.querySelector('input');
  const $todoLst = document.querySelector('.todo-lst');
  function paintTodo(newTodo) {
    const $li = document.createElement('li');
    $todoLst.appendChild($todoItm);
    $todoItm.innerHTML = newTodo;
  }
  function onTodoSubmit(event) {
    event.preventDefault();
    const newTodo = $todoIpt.value;
    $todoIpt.value = '';
    paintTodo(newTodo);
  }
  $todoForm.addEventListener('submit', onTodoSubmit);
});
