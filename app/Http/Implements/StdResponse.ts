import { ServerRequest } from 'https://deno.land/std/http/server.ts'
import Response from '../Response.ts'

export default class implements Response 
{
  public constructor(
    private request: ServerRequest
  ) { }

  public setBody(body:string): this
  {
    this.request.respond({
      body: body
    })
    
    return this
  }
}
