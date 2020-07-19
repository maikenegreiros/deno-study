import { assert, assertEquals } from 'https://deno.land/std/testing/asserts.ts';
import { delay } from "https://deno.land/std/async/delay.ts";
import Task from '../../../app/Entities/Task.ts';

const expectedTitle = 'Create Menu bar';
const expectedDescription = 'Menu bar must be responsive';
const task = new Task('1', expectedTitle);
task.setDescription(expectedDescription);

Deno.test("testing task title", () => {
  const title = task.getTitle();
  assertEquals(title, expectedTitle);
});

Deno.test("testing task description", () => {
  const description = task.getDescription();
  assertEquals(description, expectedDescription);
});

Deno.test("testing creation date", async () => {
  const beforeTaskCreation = new Date;
  await delay(100);
  const dateTask = new Task('2', 'Fix date generation issue');
  await delay(100);
  const afterTaskCreation = new Date;
  assert(dateTask.getCreatedAt().getTime() > beforeTaskCreation.getTime());
  assert(dateTask.getCreatedAt().getTime() < afterTaskCreation.getTime());
});
