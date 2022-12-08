import showTodo from './UI.js';
import deleteTask from './delete.js';

const clearBtn = document.querySelector('.button-clear');

clearBtn.addEventListener('click', () => {
  const completedItems = window.todos.filter((item) => item.status === 'completed');
  completedItems.forEach((todo) => deleteTask(window.todos.indexOf(todo)));
  showTodo(window.todos);
});
export default clearBtn;
