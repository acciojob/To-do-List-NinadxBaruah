//your code here
const input = document.getElementById("newTodoInput");
const button = document.getElementById("addTodoBtn");
const list = document.getElementById("todoList");

button.addEventListener("click", function() {
  if (input.value !== "") {
    const newTodo = document.createElement("li");
    newTodo.innerHTML = input.value;
    list.appendChild(newTodo);
    input.value = "";
  }
});

