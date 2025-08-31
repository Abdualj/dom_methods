// array for todo list
const todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];

// add your code here
const ul = document.querySelector("ul");

todoList.forEach(todo => {
  // create li
  const li = document.createElement("li");

  // create checkbox
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = `todo-${todo.id}`;
  checkbox.checked = todo.completed;

  // create label
  const label = document.createElement("label");
  label.htmlFor = `todo-${todo.id}`;
  label.textContent = todo.task;

  // append input + label into li
  li.appendChild(checkbox);
  li.appendChild(label);

  // append li into ul
  ul.appendChild(li);
});
