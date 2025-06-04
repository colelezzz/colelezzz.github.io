const taskList = document.getElementById('task-list');
const newTask = document.getElementById('new-task');

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function renderTasks() {
    taskList.innerHTML = '';
    tasks.forEach((task, i) => {
        const li = document.createElement('li');
        li.className = `d-flex justify-content-between align-items-center mb-2 p-2 rounded ${task.done ? 'text-decoration-line-through text-muted bg-light' : 'bg-white'
            }`;
        li.style.border = '1px solid #ddd';
        li.innerHTML = `
          <span onclick="toggleTask(${i})" style="cursor: pointer; font-family: "Roboto Mono", monospace;">
            ${task.text}
          </span>
          <button class="btn btn-sm btn-outline-danger" onclick="deleteTask(${i})">❌</button>
        `;
        taskList.appendChild(li);
    });
}

function toggleTask(i) {
    tasks[i].done = !tasks[i].done;
    saveTasks();
    renderTasks();
}

function deleteTask(i) {
    tasks.splice(i, 1);
    saveTasks();
    renderTasks();
}

newTask.addEventListener('keypress', function (e) {
    if (e.key === 'Enter' && newTask.value.trim()) {
        tasks.push({ text: newTask.value.trim(), done: false });
        newTask.value = '';
        saveTasks();
        renderTasks();
    }
});

renderTasks();