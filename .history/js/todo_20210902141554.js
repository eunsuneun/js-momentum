document.addEventListener('DOMContentLoaded', () => {
  const $todoForm = document.querySelector('.todo-form');
  const $todoIpt = $todoForm.querySelector('input');
  const $todoLst = document.querySelector('.todo-lst');
  function paintTodo(newTodo) {
    const $li = document.createElement('li');
    const $span = document.createElement('span');
    const $button = document.createElement('button');
    $button.innerText = 'X';
    $span.innerText = newTodo;
    $li.appendChild($span);
    $li.appendChild($button);
    $todoLst.appendChild($li);
  }
  function onTodoSubmit(event) {
    event.preventDefault();
    const newTodo = $todoIpt.value;
    $todoIpt.value = '';
    paintTodo(newTodo);
  }
  $todoForm.addEventListener('submit', onTodoSubmit);
});