/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
/* "import/no-unresolved": "off" */

// import _ from 'lodash';
import './style.css';
import html from './template.html';

const taskInput = document.querySelector('.placeholder');
const taskBox = document.getElementById('text-content');

// geting localstorage todo-list
let todos = JSON.parse(localStorage.getItem('todo-list'));

// displaying on UI
const showTodo = () => {
  let li = '';
  if (todos) {
    todos.forEach((todo, id) => {
      // if todo status is completed, set the isCompleted value to checked
      const isCompleted = todo.status === 'completed' ? 'checked' : '';
      li += `<section class="checkbox-label-wrapper">
      <div class="description">
        <input onclick=updateStatus(this)  type="checkbox" id="${id}" ${isCompleted} name="checkbox" value="checkbox">
        <label for="${id}" id="checkbox-1" class="${isCompleted} label">${todo.name}</label>
      </div>
      <div class="settings">
        <span onclick="showMenu(this)" class="dots">&#8942</span>
        <ul class="task-menu">
          <li onclick='editTask(${id}, "${todo.name}")' ><i class="uil uil-pen"></i>Edit</li>
          <li onclick="deleteTask(${id})"><i class="uil uil-trash"></i>Delete</li>
        </ul>
      </div> 
     </section>`;
    });
    taskBox.innerHTML = li;
  }
};

showTodo();

// to delete and edit icon
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
  console.log(taskId, taskName);
};

// to delete task
window.deleteTask = (deleteId) => {
  // removing selected task from array(todos)
  todos.splice(deleteId, 1);
  localStorage.setItem('todo-list', JSON.stringify(todos));
  showTodo();
};

window.updateStatus = (selectedTask) => {
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

taskInput.addEventListener('keyup', (e) => {
  const userTask = taskInput.value.trim();
  if (e.key === 'Enter' && userTask) {
    if (!todos) { // if todos dosen't exist, pass an empty array
      todos = [];
    }
    taskInput.value = ''; // emty input value
    const taskInfo = { name: userTask, status: 'pending' };
    todos.push(taskInfo); // adding new task todos
    localStorage.setItem('todo-list', JSON.stringify(todos));
    showTodo();
  }
});

// const arr = [
//   {
//     description: 'wash the dishes',
//     completed: 'true',
//     id: 1,
//   },
//   {
//     description: 'cook food',
//     completed: 'false',
//     id: 2,
//   },
//   {
//     description: 'do laundry',
//     completed: 'false',
//     id: 3,
//   },
// ];

// // eslint-disable-next-line no-return-assign
// arr.map((card) => document.getElementById('text-content').innerHTML
//   += `<section class="checkbox-label-wrapper">
//         <div class="description">
//           <input type="checkbox" id="checkbox" name="checkbox" value="checkbox">
//           <label for="checkbox" id="checkbox-1" class="label">${card.description}</label>
//         </div>
//         <span class="dots">&#8942</span>
//        </section>`);
