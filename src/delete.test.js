import { todos, addTask, deleteTask } from './todoFunc.js';

describe('Add and Remove functions testing', () => {
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