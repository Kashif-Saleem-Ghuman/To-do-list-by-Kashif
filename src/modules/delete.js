/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable import/prefer-default-export */
/* eslint-disable linebreak-style */
// to delete task
import { showTodo } from './UI.js';

export const deleteTask = (deleteId) => {
  // removing selected task from array(todos)
  todos.splice(deleteId, 1);
  localStorage.setItem('todo-list', JSON.stringify(todos));
  showTodo(todos);
};