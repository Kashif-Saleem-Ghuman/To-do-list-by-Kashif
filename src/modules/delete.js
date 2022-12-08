import showTodo from './UI.js';

const deleteTask = (deleteId) => {
  // removing selected task from array(window.todos)
  window.todos.splice(deleteId, 1);
  localStorage.setItem('todo-list', JSON.stringify(window.todos));
  showTodo(window.todos);
};

export default deleteTask;