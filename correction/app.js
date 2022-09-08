function addTodo() {
  const input = document.querySelector(".todo-input");

  console.log(input.value);
}

const button = document.querySelector(".todo-btn");
button.addEventListener("click", addTodo);
