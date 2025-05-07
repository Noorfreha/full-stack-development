function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
  
    if (taskText === "") {
      alert("Please enter a task!");
      return;
    }
  
    const li = document.createElement("li");
    li.textContent = taskText;
  
    // Add a remove button
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "❌";
    removeBtn.style.marginLeft = "10px";
    removeBtn.onclick = function() {
      li.remove();
    };
  
    li.appendChild(removeBtn);
    document.getElementById("taskList").appendChild(li);
  
    taskInput.value = ""; // Clear input field
  }
  function changeColor() {
    const colors = ["red", "blue", "green", "yellow", "pink", "purple"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
  }
  let count = 0;

  function increment() {
    count++;
    document.getElementById("count").textContent = count;
  }
  function toggleMessage() {
    const msg = document.getElementById("message");
    msg.style.display = (msg.style.display === "none") ? "block" : "none";
  }
  function addNumbers() {
    const n1 = parseFloat(document.getElementById("num1").value);
    const n2 = parseFloat(document.getElementById("num2").value);
    const result = n1 + n2;
    document.getElementById("result").textContent = isNaN(result) ? "Invalid input" : result;
  }
        