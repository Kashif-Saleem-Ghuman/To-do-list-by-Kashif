/**
 * @jest-environment jsdom
 */
import {
  todos, addTask, deleteTask, toDOList, editTask, updateStatus,
} from './todoFunc.js';

describe('Add and Remove functions testing', () => {
  document.body.innerHTML = ` <section class="container">
  <header class="header">
    <h1>Today's To Do</h1>
    <img class="rotate" src="./images/rotate-solid.svg" alt="Refresh" />
  </header>

  <article class="text-wrapper">
    <input
      class="placeholder"
      type="text"
      required
      placeholder="Add to your list..."
    />
    <img
      class="left-arrow"
      src="./images/left-turn-arrow.svg"
      alt="left point arrow"
    />
  </article>

  <article id="text-content"></article>
  <button class="button-clear" type="click">Clear All Completed</button>
</section>`;
  test('if addTask adds items to todoList', () => {
    addTask('wash dirty clothes');
    addTask('iron washed clothes');
    const expected = ['wash dirty clothes', 'iron washed clothes'];
    expect(todos).toEqual(expected);
  });

  test('if deleteTask removes the correct item', () => {
    addTask('Dry');
    deleteTask(1, 1);
    const expected = ['wash dirty clothes', 'Dry'];
    expect(todos).toEqual(expected);
  });
});

describe('function for edit, updating status, clear all completed', () => {
  test('edit function test should edit the name of the task', () => {
    editTask(2, 'hurray');
    expect(toDOList).toEqual([{ id: 0, name: 'washing clothes', status: 'pending' }, { id: 1, name: 'dry clothes', status: 'pending' },
      { id: 2, name: 'hurray', status: 'pending' }]);
  });
  test('updateStatus function should update the status of the task', () => {
    updateStatus(2, 'completed');
    expect(toDOList).toEqual([{ id: 0, name: 'washing clothes', status: 'pending' }, { id: 1, name: 'dry clothes', status: 'pending' },
      { id: 2, name: 'hurray', status: 'completed' }]);
  });
});
