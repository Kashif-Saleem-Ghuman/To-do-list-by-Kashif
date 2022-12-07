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

const myFunction = (s) => {
  console.log(s);
};

// displaying on UI
const showTodo = () => {
  let li = '';
  if (todos) {
    todos.forEach((todo, id) => {
      li += `<section class="checkbox-label-wrapper">
      <div class="description">
        <input onclick="myFunction()" type="checkbox" id="${id}" name="checkbox" value="checkbox">
        <label for="${id}" id="checkbox-1" class="label">${todo.name}</label>
      </div>
      <span class="dots">&#8942</span>
     </section>`;
    });
    taskBox.innerHTML = li;
  }
};

// showTodo();

myFunction();

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
