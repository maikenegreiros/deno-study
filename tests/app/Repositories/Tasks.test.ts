import { assertEquals } from 'https://deno.land/std/testing/asserts.ts';
// import Task from '../../../app/Entities/Task.ts';
import TasksRepository from '../../../app/Repositories/Tasks.ts';

const tasksRepository = new TasksRepository;

Deno.test("testing tasks length", () => {
  const tasks = tasksRepository.getAll();
  assertEquals(tasks.length, 2);
});

Deno.test("testing task repository getById method", () => {
  const task = tasksRepository.getById('1');
  assertEquals(task.getTitle(), 'Create mocked data');
});
