import Controller from '../Controller.ts'
import Request from '../../Http/Request.ts'
import Response from '../../Http/Response.ts'
import { readFileStr } from "https://deno.land/std/fs/mod.ts";

export default class implements Controller
{
  public run(request: Request, response: Response): Promise<Response>
  {
    return new Promise(async (resolve) => {
      const fileContent = await readFileStr('./Views/form.html')
      response.setBody(fileContent)
    
      resolve(response)
    })
  }
}
