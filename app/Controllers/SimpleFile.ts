import Controller from './Controller.ts'
import Request from '../Http/Request.ts'
import Response from '../Http/Response.ts'
import { readFileStr } from "https://deno.land/std/fs/mod.ts";

export default class implements Controller 
{
  public constructor(
    private filePath: string
  ){}

  public run(request: Request, response: Response): Promise<Response> 
  {
    return new Promise(async (resolve) => {
      const fileContent = await readFileStr(this.filePath)
      response.setBody(fileContent)

      resolve(response)
    })
  }
}
