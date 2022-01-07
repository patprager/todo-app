// initial State für die ToDo-App
const state = {
  filterModus: "All",
  todoInput: "",
  todos: [
    { text: "Bewerbung abschicken", isDone: false },
    { text: "Einkaufen gehen", isDone: true },
  ],
};
// Daten updaten
function updateState() {
  // const currentTodoInput = document.querySelector("#your-todos").value;
  // state.todoInput = currentTodoInput;
  // const currentFilterModus =
  // state.filterModus =
  // state.todos =
}
// 1. Anwählen der filterCheckbox = treffen einer Auswahl der angezeigten Werte
// const allFilter = document.querySelector("#radio_all").addEventListener('click', filterModus)
// const openFilter = document.querySelector("#radio_open").addEventListener('click', filterModus)
// const addFilter = document.querySelector("#radio_done").addEventListener('click', filterModus)

// 2. click the buttonRemove = alle Todo-Tasks werden gelöscht
// const removeButton = document.querySelector("#button-remove").addEventListener('click', clearAll)

// 3. click in newTodo = schreiben einer Task mit mind. 5 Zeichen im Eingabefeld
// const yourTodoList = document.querySelector("#your-todos").addEventListener('input', updateState)

// 4. click the addButton = die geschriebene Aufgabe wird der Liste hinzugefügt
// const variablenName = document.("#id aus HTML/CSS").addEventListener("Event", function (){})
const addButton = document
  .querySelector("#add-button")
  .addEventListener("click", yourTodos);
// click addButton und füge den Text in createTodoList ein

function yourTodos() {
  const addTodo = document.querySelector("#add-button");
  createTodoList();

  const newInput = document.querySelector("#your-todos");
  const textInput = document.createTextNode("#your-todost");
  newInput.appendChild(textInput);
}

// ___________________________________

function createTodoList() {
  const ulList = document.querySelector("#create-todo-list");
  const todoList = document.createElement("li");
  ulList.appendChild(todoList);

  const checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  checkBox.id = "check";
  todoList.appendChild(checkBox);

  // let newInput = document.getElementById("#your-todos").value;
  // let textInput = document.createTextNode(inputValue);
}

// 5. click the checkedBox = abhaken der erfüllten Aufgabe (Task isDone)
// const todoIsDone = document.querySelector("checkedbox").addEventListener('click', isDone)

// Ausgabe updaten
function render() {}

createTodoList();
