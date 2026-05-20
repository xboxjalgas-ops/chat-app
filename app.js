const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Бет жүктелгенде localStorage-тан деректерді оқу
document.addEventListener('DOMContentLoaded', loadTasks);

function addTask() {
    const taskText = taskInput.value;
    if (taskText === "") return;

    createTaskElement(taskText, false);
    saveTasks();
    taskInput.value = '';
}

function createTaskElement(text, isCompleted) {
    const li = document.createElement('li');
    if (isCompleted) li.classList.add('completed');
    
    li.innerHTML = `
        <span onclick="toggleTask(this)" style="cursor:pointer; flex:1;">${text}</span>
        <button onclick="removeTask(this)">❌</button>
    `;
    taskList.appendChild(li);
}

function toggleTask(span) {
    span.parentElement.classList.toggle('completed');
    saveTasks();
}

function removeTask(btn) {
    btn.parentElement.remove();
    saveTasks();
}

function saveTasks() {
    const tasks = [];
    document.querySelectorAll('#taskList li').forEach(li => {
        tasks.push({
            text: li.querySelector('span').textContent,
            completed: li.classList.contains('completed')
        });
    });
    localStorage.setItem('myTasks', JSON.stringify(tasks));
}

function loadTasks() {
    const savedTasks = JSON.parse(localStorage.getItem('myTasks'));
    if (savedTasks) {
        savedTasks.forEach(task => createTaskElement(task.text, task.completed));
    }
}