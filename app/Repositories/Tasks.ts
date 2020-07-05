import tasksArray from '../database/mocks/tasks.ts';
import Task from '../Entities/Task.ts';

class Tasks
{
  public getAll(): Array<Task>
  {
    return tasksArray.map(task => (
      new Task(task.id, task.title, task.description)
    ));
  }

  public getById(id: string): Task
  {
    const [task] = tasksArray.filter(task => task.id === id)
    return new Task(task.id, task.title, task.description)
  }
}

export default Tasks;
