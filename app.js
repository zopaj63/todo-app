class Task {
    constructor(title) {
        this.title = title;
    }

    createElement() {
        const taskElement = document.createElement("div");
        taskElement.innerHTML = `<label><input type="checkbox">${this.title}</label>`;

        const removeButton = document.createElement('button');
        removeButton.innerText = "X";
        removeButton.addEventListener("click", (event) => {
            event.preventDefault();
            taskElement.remove();
        });

        return taskElement;
    }
}

const taskForm = document.querySelector("[data-task-form]");
const titleInput = taskForm.querySelector("[name=title]");
const taskList = document.querySelector("[data-task-list]");

taskForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const task = new Task(titleInput.value);

    taskList.appendChild(taskElement);

});

