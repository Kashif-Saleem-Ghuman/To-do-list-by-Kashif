/**
 * @jest-environment jsdom
 */
export const taskBox = document.getElementById('text-content');

export const todos = [];

export const addTask = (task) => {
  todos.push(task);
};

export const deleteTask = (index) => {
  todos.splice(index, 1);
};

// edit task function

// mock object of local storage
export const toDOList = [
  { id: 0, name: 'washing clothes', status: 'pending' },
  { id: 1, name: 'dry clothes', status: 'pending' },
  { id: 2, name: 'iron clothes', status: 'pending' },

];

// edit function
export const editTask = (taskid, newName) => {
  toDOList.forEach((index) => {
    if (index.id === taskid) {
      index.name = newName;
    }
  });
  return toDOList;
};

// update status function

export const updateStatus = (taskid, newStatus) => {
  toDOList.forEach((index) => {
    if (index.id === taskid) {
      index.status = newStatus;
    }
  });
  return toDOList;
};

// Clear all completed

export const clearCompleted = () => {
  toDOList.forEach((index) => {
    if (index.status === 'completed') {
      toDOList.splice(index.id, 1);
    }
  });
  return toDOList;
};