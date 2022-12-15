export const todos = [];

export const addTask = (task) => {
  todos.push(task);
};

export const deleteTask = (index) => {
  todos.splice(index, 1);
};
