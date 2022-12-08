/* eslint-disable linebreak-style */
// to delete task
import { showTodo } from './modules/UI.js';

window.deleteTask = (deleteId, todos) => {
  // removing selected task from array(todos)
  todos.splice(deleteId, 1);
  localStorage.setItem('todo-list', JSON.stringify(todos));
  showTodo(todos);
};