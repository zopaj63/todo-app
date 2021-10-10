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
    taskElement.innerHTML = `<label>Done!<input type="checkbox" /><span class="title"> ${this.title} </span><button>Delete</button></label><hr>`;

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


//clock *******
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var radius = canvas.height / 2;
ctx.translate(radius, radius);
radius = radius * 0.90
setInterval(drawClock, 1000);

function drawClock() {
  drawFace(ctx, radius);
  drawNumbers(ctx, radius);
  drawTime(ctx, radius);
}

function drawFace(ctx, radius) {
  var grad;
  ctx.beginPath();
  ctx.arc(0, 0, radius, 0, 2 * Math.PI);
  ctx.fillStyle = 'lightyellow';
  ctx.fill();
  grad = ctx.createRadialGradient(0, 0, radius * 0.95, 0, 0, radius * 1.05);
  grad.addColorStop(0, '#333');
  grad.addColorStop(0.5, 'lightyellow');
  grad.addColorStop(1, '#333');
  ctx.strokeStyle = grad;
  ctx.lineWidth = radius * 0.1;
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(0, 0, radius * 0.1, 0, 2 * Math.PI);
  ctx.fillStyle = '#333';
  ctx.fill();
}

function drawNumbers(ctx, radius) {
  var ang;
  var num;
  ctx.font = radius * 0.15 + "px arial";
  ctx.textBaseline = "middle";
  ctx.textAlign = "center";
  for (num = 1; num < 13; num++) {
    ang = num * Math.PI / 6;
    ctx.rotate(ang);
    ctx.translate(0, -radius * 0.85);
    ctx.rotate(-ang);
    ctx.fillText(num.toString(), 0, 0);
    ctx.rotate(ang);
    ctx.translate(0, radius * 0.85);
    ctx.rotate(-ang);
  }
}

function drawTime(ctx, radius) {
  var now = new Date();
  var hour = now.getHours();
  var minute = now.getMinutes();
  var second = now.getSeconds();
  //hour
  hour = hour % 12;
  hour = (hour * Math.PI / 6) +
    (minute * Math.PI / (6 * 60)) +
    (second * Math.PI / (360 * 60));
  drawHand(ctx, hour, radius * 0.5, radius * 0.07);
  //minute
  minute = (minute * Math.PI / 30) + (second * Math.PI / (30 * 60));
  drawHand(ctx, minute, radius * 0.8, radius * 0.07);
  // second
  second = (second * Math.PI / 30);
  drawHand(ctx, second, radius * 0.9, radius * 0.02);
}

function drawHand(ctx, pos, length, width) {
  ctx.beginPath();
  ctx.lineWidth = width;
  ctx.lineCap = "round";
  ctx.moveTo(0, 0);
  ctx.rotate(pos);
  ctx.lineTo(0, -length);
  ctx.stroke();
  ctx.rotate(-pos);
}

//const date = new Date();
//document.getElementById("date").innerHTML = date;

var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
var today = new Date();

document.getElementById("date").innerHTML = (today.toLocaleDateString("en-US", options));

