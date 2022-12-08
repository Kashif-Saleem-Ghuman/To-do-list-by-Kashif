/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
/* "import/no-unresolved": "off" */

// import _ from 'lodash';
import './style.css';
import html from './template.html';
import { showTodo } from './modules/UI.js';
import updateStatus from './modules/updateStatus.js';

const taskInput = document.querySelector('.placeholder');
const taskBox = document.getElementById('text-content');
let editId;
let isEditTask = false;

// geting localstorage todo-list
let todos = JSON.parse(localStorage.getItem('todo-list'));

showTodo(todos);
window.updateStatus = updateStatus;







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
