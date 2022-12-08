const updateStatus = (selectedTask) => {
  // getting paragraph that contains task name
  const taskName = selectedTask.nextElementSibling;

  if (selectedTask.checked) {
    taskName.classList.add('checked');
    // updating the status of selected task to completed
    window.todos[selectedTask.id].status = 'completed';
  } else {
    taskName.classList.remove('checked');
    // updating the status of selected task to completed
    window.todos[selectedTask.id].status = 'pending';
  }
  localStorage.setItem('todo-list', JSON.stringify(window.todos));
};

export default updateStatus;