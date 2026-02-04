const myForm = document.getElementById('myForm');
const inputData = document.getElementById('userInput');
const taskListContainer = document.getElementById('taskListContainer');

let tasksList = [];

function displayTasks() {
    taskListContainer.innerHTML = "";

    for (let i = 0; i < tasksList.length; i++) {
        const li = document.createElement('li');
        li.className = "task-item";

        // 1. Checkbox
        const checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.checked = tasksList[i].completed;
        checkbox.onclick = function() {
            tasksList[i].completed = checkbox.checked;
            displayTasks();
        };

        // 2. Task Text
        const taskText = document.createElement('span');
        taskText.textContent = tasksList[i].text;
        if (tasksList[i].completed) {
            taskText.classList.add("completed-text");
        }

        // 3. Delete (Bin) Button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = "🗑️"; // Bin icon
        deleteBtn.className = "delete-btn";
        
        deleteBtn.onclick = function() {
            tasksList.splice(i, 1); 
            displayTasks(); 
        };

        li.appendChild(checkbox);
        li.appendChild(taskText);
        li.appendChild(deleteBtn);
        
        taskListContainer.appendChild(li);
    }
}

myForm.addEventListener('submit', function(event) {
    event.preventDefault();
    if (inputData.value.trim() !== "") {
        tasksList.push({ text: inputData.value, completed: false });
        inputData.value = "";
        displayTasks();
    }
});