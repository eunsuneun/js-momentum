document.addEventListener('DOMContentLoaded', () => {
  const $todoForm = document.querySelector('.todo-form');
  const $todoIpt = $todoForm.querySelector('input');
  const $todoLst = document.querySelector('.todo-lst');
  const TODOS_KEY = 'todos';
  let toDos = [];

  function saveTodos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
  }

  function deleteTodo(event) {
    const $targetLi = event.target.parentElement;
    $targetLi.remove();
  }

  function paintTodo(newTodo) {
    const $li = document.createElement('li');
    const $span = document.createElement('span');
    $span.innerText = newTodo;
    const $button = document.createElement('button');
    $button.innerText = '🗑';
    $button.addEventListener('click', deleteTodo);
    $li.appendChild($span);
    $li.appendChild($button);
    $todoLst.appendChild($li);
  }
  function onTodoSubmit(event) {
    event.preventDefault();
    const newTodo = $todoIpt.value;
    $todoIpt.value = '';
    const newTodoObj =
    toDos.push(newTodo);
    paintTodo(newTodo);
    saveTodos();
  }
  $todoForm.addEventListener('submit', onTodoSubmit);

  const savedTodos = localStorage.getItem(TODOS_KEY);
  console.log(savedTodos);

  if (savedTodos) {
    const parsedTodos = JSON.parse(savedTodos);
    console.log(parsedTodos);
    toDos = parsedTodos;
    parsedTodos.forEach(paintTodo);
  }
});
