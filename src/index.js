document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#create-task-form");
  const taskList = document.querySelector("#tasks");
  const prioritySelect = document.createElement("select");
  prioritySelect.innerHTML = `
    <option value="low">Low</option>
    <option value="medium">Medium</option>
    <option value="high">High</option>
  `;
  form.insertBefore(prioritySelect, form.querySelector("input[type='submit']"));
  form.addEventListener("submit", (e) => {
    e.preventDefault(); 
    const taskInput = document.querySelector("#new-task-description").value;
    const priority = prioritySelect.value;
    if (taskInput.trim() !== "") {
      const taskItem = document.createElement("li");
      taskItem.textContent = taskInput;
      switch (priority) {
        case "high":
          taskItem.style.color = "red";
          break;
        case "medium":
          taskItem.style.color = "orange";
          break;
        case "low":
          taskItem.style.color = "green";
          break;
      }
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "X";
      deleteBtn.addEventListener("click", () => taskItem.remove());
      taskItem.appendChild(deleteBtn);
      taskList.appendChild(taskItem);
    }
    form.reset();
  });
});




