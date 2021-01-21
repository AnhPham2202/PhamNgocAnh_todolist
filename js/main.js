function getE(id) {
    return document.getElementById(id);
}
var check = new Validation();
var taskList = new TaskList();

getLocalStorage();

getE("addItem").addEventListener("click", function (event) {
    event.preventDefault();
    var id = Math.random();
    var status = "to do";
    var taskName = getE("newTask").value;
    var isValid = check.emptyCheck(taskName);
    // CHECK TRÙNG 
    if (taskList.arr.length != 0) {
        var toDoCoincident = check.coincidentToDo(taskName, taskList.arr);
    }
    if (taskList.completedArr.length != 0) {
        var completedCoincident = check.coincidentCompleted(taskName, taskList.completedArr);
    }

    if (toDoCoincident == true || completedCoincident == true) {
        alert("Coincident Task");
        return;
    }

    // CHECK RỖNG
    if (isValid) {
        var newTask = new Task(id, taskName, status);
        taskList.addTask(newTask)
        todoTable(taskList.arr);
        setLocalStorage();
    }
})



function todoTable(arr) {
    var content = "";
    for (var i = 0; i < arr.length; i++) {
        content += `
            <li>${arr[i].taskName} <button onclick="delTask(${arr[i].id})"><i class="fas fa-trash-alt"></i></button> <button onclick="swapStatus(${arr[i].id})"><i class="fas fa-check-circle"></i></button></li>
        `
    }
    getE("todo").innerHTML = content;
}

function completedTable(arr) {
    var content = "";
    for (var i = 0; i < arr.length; i++) {
        content += `
            <li>${arr[i].taskName} <button onclick="delTask(${arr[i].id})"><i class="fas fa-trash-alt"></i></button> <button onclick="swapStatus(${arr[i].id})"><i style="color: green" class="fas fa-check-circle"></i></button></li>
        `
    }
    getE("completed").innerHTML = content;
}

function swapStatus(id) {
    taskList.swapStatus(id);
    todoTable(taskList.arr);
    completedTable(taskList.completedArr);
    setLocalStorage();
}
function delTask(id) {
    taskList.delTask(id);
    todoTable(taskList.arr);
    completedTable(taskList.completedArr)
    setLocalStorage();
}

function setLocalStorage() {
    var arrString = JSON.stringify(taskList.arr);
    var completedArrString = JSON.stringify(taskList.completedArr);

    localStorage.setItem("todo", arrString);
    localStorage.setItem("completed", completedArrString);


}


function getLocalStorage() {
    if (localStorage.getItem("todo")) {
        taskList.arr = JSON.parse(localStorage.getItem("todo"));
        todoTable(taskList.arr);
    }
    if (localStorage.getItem("completed")) {
        taskList.completedArr = JSON.parse(localStorage.getItem("completed"));
        completedTable(taskList.completedArr);
    }
}