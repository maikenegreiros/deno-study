import RouterInterface from '../Router.ts'
import { Router } from "https://deno.land/x/oak/mod.ts";

export default class implements RouterInterface
{
  public constructor(
    private router: Router
  ){}

  public get(path:string, controller: CallableFunction): void
  {
    this.router.get(path, controller)
  }
  
  public post(path:string, controller: CallableFunction): void
  {
    this.router.post(path, controller)
  }
}
