import { ServerRequest } from 'https://deno.land/std/http/server.ts'
import Request from '../Request.ts'

export default class implements Request
{
  public constructor(
    private request: ServerRequest
  ) {}

  public getUrl(): string
  {
    return this.request.url
  }
}
