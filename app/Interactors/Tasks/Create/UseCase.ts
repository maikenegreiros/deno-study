import Input from './Input.ts'
import Create from './Create.ts'
import Task from './../../../Entities/Task.ts'
import Repository from './../Repository.ts'
import DataAccess from './../DataAccess.ts'

export default class implements Create
{
  private repository: Repository

  public constructor(repository: Repository)
  {
    this.repository = repository
  }

  public createTask(input: Input): Promise<boolean>
  {
    const task = this.buildTask(input)
    const dataAccess = this.convertTaskToDataAccess(task)

    return this.repository.save(dataAccess)
  }

  private buildTask(input: Input): Task
  {
    const task = new Task(input.title)
    task.setDescription(input.description)
    return task
  }

  private convertTaskToDataAccess(task: Task): DataAccess
  {
    return {
      'title': task.getTitle(),
      'description': task.getDescription(),
      'createdAt': task.getCreatedAt(),
    }
  }
}
