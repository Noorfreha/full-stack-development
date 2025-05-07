function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();
    if (!taskText) return alert("Please enter a task!");
  
    const li = document.createElement("li");
    li.textContent = taskText;
  
    // Mark as done button
    const doneBtn = document.createElement("button");
    doneBtn.textContent = "✔";
    doneBtn.onclick = () => {
      li.classList.toggle("completed");
    };
  
    // Delete button
    const delBtn = document.createElement("button");
    delBtn.textContent = "🗑";
    delBtn.onclick = () => li.remove();
  
    li.appendChild(doneBtn);
    li.appendChild(delBtn);
  
    document.getElementById("taskList").appendChild(li);
    input.value = "";
  }
  
  function filterTasks(type) {
    const tasks = document.querySelectorAll("#taskList li");
    tasks.forEach(task => {
      const isDone = task.classList.contains("completed");
      if (type === "all") {
        task.style.display = "list-item";
      } else if (type === "completed") {
        task.style.display = isDone ? "list-item" : "none";
      } else if (type === "pending") {
        task.style.display = !isDone ? "list-item" : "none";
      }
    });
  }
// Load tasks from localStorage on page load
window.onload = () => {
    loadTasks();
  };
  
  document.getElementById("taskInput").addEventListener("keypress", function (e) {
    if (e.key === "Enter") addTask();
  });
  
  function addTask() {
    const taskInput = document.getElementById("taskInput");
    const dueDate = document.getElementById("dueDate").value;
    const taskText = taskInput.value.trim();
    if (!taskText) return alert("Enter a task!");
  
    const task = {
      text: taskText,
      completed: false,
      dueDate: dueDate || null,
    };
  
    let tasks = getTasks();
    tasks.push(task);
    saveTasks(tasks);
    taskInput.value = "";
    dueDate.value = "";
    renderTasks(tasks);
  }
  
  function renderTasks(tasks, filter = "all") {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";
  
    tasks.forEach((task, index) => {
      if (
        (filter === "completed" && !task.completed) ||
        (filter === "pending" && task.completed)
      )
        return;
  
      const li = document.createElement("li");
      li.className = task.completed ? "completed" : "";
  
      const taskText = document.createElement("span");
      taskText.innerText = task.text + (task.dueDate ? ` (Due: ${task.dueDate})` : "");
  
      const actions = document.createElement("div");
      actions.className = "task-actions";
  
      const doneBtn = document.createElement("button");
      doneBtn.innerText = "✔";
      doneBtn.onclick = () => toggleComplete(index);
  
      const editBtn = document.createElement("button");
      editBtn.innerText = "✏";
      editBtn.className = "edit";
      editBtn.onclick = () => editTask(index);
  
      const delBtn = document.createElement("button");
      delBtn.innerText = "🗑";
      delBtn.className = "delete";
      delBtn.onclick = () => deleteTask(index);
  
      actions.appendChild(doneBtn);
      actions.appendChild(editBtn);
      actions.appendChild(delBtn);
  
      li.appendChild(taskText);
      li.appendChild(actions);
      taskList.appendChild(li);
    });
  }
  
  function toggleComplete(index) {
    let tasks = getTasks();
    tasks[index].completed = !tasks[index].completed;
    saveTasks(tasks);
    renderTasks(tasks);
  }
  
  function editTask(index) {
    let tasks = getTasks();
    const newText = prompt("Edit task:", tasks[index].text);
    if (newText !== null && newText.trim() !== "") {
      tasks[index].text = newText.trim();
      saveTasks(tasks);
      renderTasks(tasks);
    }
  }
  
  function deleteTask(index) {
    let tasks = getTasks();
    tasks.splice(index, 1);
    saveTasks(tasks);
    renderTasks(tasks);
  }
  
  function clearAllTasks() {
    if (confirm("Are you sure you want to delete all tasks?")) {
      localStorage.removeItem("tasks");
      renderTasks([]);
    }
  }
  
  function filterTasks(type) {
    const tasks = getTasks();
    renderTasks(tasks, type);
  }
  
  function getTasks() {
    return JSON.parse(localStorage.getItem("tasks")) || [];
  }
  
  function saveTasks(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
  
  function loadTasks() {
    const tasks = getTasks();
    renderTasks(tasks);
  }
    