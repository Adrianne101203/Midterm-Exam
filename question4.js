// Task model and task storage
let tasks = [];

// Function to generate a unique ID for each task
function generateId() {
  return tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1;
}

// Create a new task
function createTask(name, description) {
  const task = {
    id: generateId(),
    name: name,
    description: description,
  };
  tasks.push(task);
  console.log(`Task Created:`, task);
}

// Read (view all tasks)
function readTasks() {
  if (tasks.length === 0) {
    console.log("No tasks available.");
  } else {
    console.log("All Tasks:");
    tasks.forEach(task => {
      console.log(`ID: ${task.id}, Name: ${task.name}, Description: ${task.description}`);
    });
  }
}

// Update a task by ID
function updateTask(id, newName, newDescription) {
  const taskIndex = tasks.findIndex(task => task.id === id);
  
  if (taskIndex === -1) {
    console.log(`Task with ID ${id} not found.`);
  } else {
    tasks[taskIndex].name = newName;
    tasks[taskIndex].description = newDescription;
    console.log(`Task Updated:`, tasks[taskIndex]);
  }
}

// Delete a task by ID
function deleteTask(id) {
  const taskIndex = tasks.findIndex(task => task.id === id);
  
  if (taskIndex === -1) {
    console.log(`Task with ID ${id} not found.`);
  } else {
    const deletedTask = tasks.splice(taskIndex, 1);
    console.log(`Task Deleted:`, deletedTask[0]);
  }
}

// Example Usage:

// Create tasks
createTask("Task 1", "This is the first task.");
createTask("Task 2", "This is the second task.");

// View all tasks
readTasks();

// Update a task
updateTask(1, "Updated Task 1", "This is the updated description.");

// Delete a task
deleteTask(2);

// View all tasks after update and delete
readTasks();
