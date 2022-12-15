import { todos, addTask } from './todoFunc.js';

test('should delete the correct item from todoList', () => {
  addTask('wash');
  addTask('iron');
  expect(todos).toEqual(['wash', 'iron']);
});
