/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
/* "import/no-unresolved": "off" */

// import _ from 'lodash';
import './style.css';
import html from './template.html';
import { showTodo } from './modules/UI.js';
import { updateStatus } from './modules/updateStatus.js';
import { deleteTask } from './modules/delete.js';

const taskInput = document.querySelector('.placeholder');
let editId;
let isEditTask = false;

// geting localstorage todo-list
window.todos = JSON.parse(localStorage.getItem('todo-list'));

// to show menu
window.showMenu = (selectedTask) => {
  // getting task menu div
  const taskMenu = selectedTask.nextElementSibling;
  taskMenu.classList.add('show');
  document.addEventListener('click', (e) => {
    // need to add condition for e.target.tagName != "I" ;
    if (e.target !== selectedTask) {
      taskMenu.classList.remove('show');
    }
  });
};

// to edit task
window.editTask = (taskId, taskName) => {
  editId = taskId;
  isEditTask = true;
  taskInput.value = taskName;
};

showTodo(todos);
window.updateStatus = updateStatus;
// window.editTask = editTask;
// window.showMenu = showMenu;
window.deleteTask = deleteTask;

taskInput.addEventListener('keyup', (e) => {
  const userTask = taskInput.value.trim();
  if (e.key === 'Enter' && userTask) {
    if (!isEditTask) { //  if isEdidTask isn't true
      todos = !todos ? [] : todos;
      const taskInfo = { name: userTask, status: 'pending' };
      todos.push(taskInfo);
    } else {
      isEditTask = false;
      todos[editId].name = userTask;
    }

    taskInput.value = ''; // emty input value

    localStorage.setItem('todo-list', JSON.stringify(todos));
    showTodo(todos);
  }
});