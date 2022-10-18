const TODOS_KEY = "todos";
const todoForm = document.getElementById("todoForm");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todoList");
let todos = [];

function saveTodos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function loadTodos() {
    const savedTodos = localStorage.getItem(TODOS_KEY);
    if (savedTodos) {
        todos = JSON.parse(savedTodos);
        todos.forEach(paintTodo);
    }
}

function onClickDeleteDoto(event) {
    const li = event.target.parentElement;
    todos = todos.filter(e => e.id !== Number(li.id))
    saveTodos();
    li.remove();
}

function paintTodo(newTodoObj) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");

    li.id = newTodoObj.id;
    span.innerText = newTodoObj.text;
    button.innerText = "X";
    button.addEventListener("click", onClickDeleteDoto);
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}

function onTodoSubmit(event) {
    event.preventDefault();
    const newTodo = todoInput.value;

    todoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now()
    }
    todos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodos();
}

todoForm.addEventListener("submit", onTodoSubmit);
loadTodos();

