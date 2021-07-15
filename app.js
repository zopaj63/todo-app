class Task {
    constructor(title) {
        this.title = title;
        this.isDone = false;
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

        const checkboxElement = taskElement.querySelector("input[type='checkbox']");
        checkboxElement.toggleAttribute("checked", this.isDone);
        checkboxElement.addEventListener("change", (event) => {
            event.preventDefault();
            this.isDone = event.target.checked;
        });

        return taskElement;
    }
}

const tasks = [];


const taskForm = document.querySelector("[data-task-form]");
const titleInput = taskForm.querySelector("[name=title]");
const taskList = document.querySelector("[data-task-list]");

taskForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const task = new Task(titleInput.value);
    tasks.push(task);
    taskList.innerHTML = "";
    for (let i = 0; i < tasks.length; i++) {
        taskList.appendChild(tasks[i].createElement());
    }

    console.log(tasks);

});

