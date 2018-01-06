var taskListNode = document.getElementById("taskList");
var addTaskButton = document.getElementById("addButton");
var taskInput = document.getElementById("taskInput");

var taskList = new TaskList(taskListNode);

function TaskList(listNode) {
    this.listNode = listNode;
    this.tasks = new Array();

    this.addTask = function (task) {
        this.tasks.push(task);
        this.listNode.appendChild(task.listItem);
        var taskList = this;
        task.onRemove = function () {
           taskList.removeTask(task);
        }
    };

    this.removeTask = function (task) {
        this.listNode.removeChild(task.listItem);
        var index = this.tasks.indexOf(task);
        this.tasks.splice(index, 1);
    };

};


function Task(description) {
    this.description = description;
    this.listItem = document.createElement("li");
    this.listItem.innerHTML = this.description;

    var removeButton = document.createElement("span");
    removeButton.innerHTML = "   x";
    this.listItem.appendChild(removeButton);

    var task = this
    removeButton.onclick = function () {
        task.onRemove()
    }
    this.onRemove = null;

};


addTaskButton.onclick = function () {
    var taskDescription = taskInput.value;
    taskInput.value = "";
    var task = new Task(taskDescription);
    taskList.addTask(task);
};


