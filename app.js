// function Task(title){
//  this.title=title;
// }
// ovu funkciju pišemo kao klasu:

class Task {
  constructor(title) {
    this.title = title;
    this.isDone = false;
    this.isDeleted = false;
  }

  createElement() {
    const taskElement = document.createElement("div");
    taskElement.innerHTML = `<label>Done!<input type="checkbox" /> ${this.title} <button>Delete</button></label><hr>`;

    const removeButton = taskElement.querySelector("button");
    removeButton.addEventListener("click", (event) => {
      event.preventDefault();
      this.isDeleted = true;
      taskElement.remove();
    });

    const checkboxElement = taskElement.querySelector("input[type='checkbox']");
    checkboxElement.toggleAttribute("checked", this.isDone);
    checkboxElement.addEventListener("change", (event) => {
      event.preventDefault();
      this.isDone = event.target.checked;
    });

    return taskElement;
  }
}

// const tasks = [];

const taskForm = document.querySelector("[data-task-form]");
const titleInput = taskForm.querySelector("[name=title]");

class TaskList {
  constructor() {
    this.taskListElement = document.querySelector("[data-task-list]");
    this.tasks = [];
  }

  refresh() {
    this.taskListElement.innerHTML = "";
    for (let i = 0; i < this.tasks.length; i++) {
      const task = this.tasks[i];
      if (!task.isDeleted) {
        this.taskListElement.appendChild(task.createElement());
      }
    }
  }
}

const taskList = new TaskList();

taskForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const task = new Task(titleInput.value);
  taskList.tasks.push(task);
  taskList.refresh();
});