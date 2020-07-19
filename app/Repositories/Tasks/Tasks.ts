import Task from '../../Entities/Task.ts'

export default interface Tasks {
  getAll(): Array<Task>
  getById(id: string): Task
}
