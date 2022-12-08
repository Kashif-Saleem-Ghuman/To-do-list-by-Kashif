/* eslint-disable import/prefer-default-export */
/* eslint-disable linebreak-style */
/* eslint-disable prefer-const */
/* eslint-disable linebreak-style */
// geting localstorage todo-list
const taskBox = document.getElementById('text-content');

// displaying on UI
export const showTodo = (todos) => {
  let li = '';
  if (todos) {
    todos.forEach((todo, id) => {
      // if todo status is completed, set the isCompleted value to checked
      const isCompleted = todo.status === 'completed' ? 'checked' : '';
      li += `<section class="checkbox-label-wrapper">
      <div class="description">
        <input onclick='updateStatus(this,${todos})'  type="checkbox" id="${id}" ${isCompleted} name="checkbox" value="checkbox">
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

