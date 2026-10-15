
function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    let li = document.createElement("li");
    let span = document.createElement("span");

    span.textContent = taskText;
    span.onclick = function () {
        completeTask(span);
    };

    let editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.className = "edit-btn";
    editButton.onclick = function () {
        editTask(editButton);
    };

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-btn";
    deleteButton.onclick = function () {
        deleteTask(deleteButton);
    };

    li.append(span, editButton, deleteButton);
    document.getElementById("taskList").appendChild(li);

    taskInput.value = "";
}

function editTask(button) {
    let task = button.parentElement.querySelector("span");
    let newTask = prompt("Edit your task:", task.textContent);

    if (newTask !== null && newTask.trim() !== "") {
        task.textContent = newTask.trim();
    }
}

function deleteTask(button) {
    button.parentElement.remove();
}

function completeTask(task) {
    task.classList.toggle("completed");
}
