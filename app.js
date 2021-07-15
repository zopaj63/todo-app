class Task {
    constructor(title) {
        this.title = title;
    }
}

const task = [];

const taskForm = document.querySelector("[data-task-form]");
const titleInput = taskForm.querySelector("[name=title]");

taskForm.addEventListener("submit", (event) => {
    event.preventDefault();
    task.push(new Task(titleInput.value));
    console.log(task);
});

