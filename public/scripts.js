const addTaskForm = document.querySelector('.add-container');
const taskInput = document.querySelector('#task-input');
const taskList = document.querySelector('.list-container')

addTaskForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const taskName = taskInput.value.trim();

  if (taskName !== '') {
    addTask(taskName);
    taskInput.value = '';
  }
})

const tasks = [];

const addTask = (taskName) => {
  const newTask = {
    name: taskName,
    completed: false
  };

  tasks.push(newTask);
  renderTasks();
}

const markTasksAsComplete = (taskIndex) => {
  tasks[taskIndex].completed = true;
}

const deleteTask = (taskIndex) => {
  tasks.splice(taskIndex, 1);
}

const renderTasks = () => {
  taskList.innerHTML = '';

  tasks.forEach((task, index) => {
    const taskItem = document.createElement('div');
    taskItem.classList.add('task-item');

    if (task.completed) {
      taskItem.classList.add('completed');
    }

    taskItem.innerHTML = `
      <span class="single-task">${task.name}</span>
      <button class="complete-button">Complete</button>
      <button class="delete-button">Delete</button>
    `;

    taskList.appendChild(taskItem);

    const completeButton = taskItem.querySelector('.complete-button');
    completeButton.addEventListener('click', () => {
      markTasksAsComplete(index);
      renderTasks()
    })

    const deleteButton = taskItem.querySelector('.delete-button');
    deleteButton.addEventListener('click', () => {
      deleteTask(index);
      renderTasks();
    })
  })
};
