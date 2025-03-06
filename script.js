let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    const itemList = document.getElementById("itemList");
    itemList.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.innerHTML = `${task} <button onclick="deleteItem(${index})">Delete</button>`;
        itemList.appendChild(li);
    });
}

function addItem() {
    const input = document.getElementById("itemInput");
    const value = input.value.trim();

    if (value !== "") {
        tasks.push(value);
        saveTasks();
        loadTasks();
        input.value = "";
    } else {
        alert("Please enter an item.");
    }
}

function deleteItem(index) {
    tasks.splice(index, 1);
    saveTasks();
    loadTasks();
}

function clearAll() {
    tasks = [];
    saveTasks();
    loadTasks();
}

// Load tasks when the page loads
loadTasks();