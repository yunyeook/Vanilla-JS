const toDoForm = document.getElementById('todo-form');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.getElementById('todolist');

let toDos = [];
const TODOS = 'todos';

function saveToDos() {
  localStorage.setItem(TODOS, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter(element => element.id !== parseInt(li.id));
  saveToDos();
}

function paintToDo(newToDoObject) {
  const li = document.createElement('li');
  li.id = newToDoObject.id;
  const span = document.createElement('span');
  span.innerText = newToDoObject.text;

  const button = document.createElement('button');
  button.innerText = '❌';
  button.addEventListener('click', deleteToDo);

  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function toDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = ''; //입력값 저장 후 빈칸으로 두기
  const newToDoObject = {
    id: Date.now(),
    text: newToDo,
  };
  toDos.push(newToDoObject);
  paintToDo(newToDoObject); //입력값으로 리스트태그 만들기
  saveToDos();
}

toDoForm.addEventListener('submit', toDoSubmit);

const savedToDos = localStorage.getItem(TODOS);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
