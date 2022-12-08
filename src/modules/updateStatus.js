/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
/* eslint-disable import/prefer-default-export */
/* eslint-disable linebreak-style */
export const updateStatus = (selectedTask) => {
  // getting paragraph that contains task name
  const taskName = selectedTask.nextElementSibling;

  if (selectedTask.checked) {
    taskName.classList.add('checked');
    // updating the status of selected task to completed
    todos[selectedTask.id].status = 'completed';
  } else {
    taskName.classList.remove('checked');
    // updating the status of selected task to completed
    todos[selectedTask.id].status = 'pending';
  }
  localStorage.setItem('todo-list', JSON.stringify(todos));
};
