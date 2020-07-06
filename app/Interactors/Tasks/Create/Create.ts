import Input from './Input.ts'

interface Create
{
  createTask(input: Input): Promise<boolean>
}

export default Create
