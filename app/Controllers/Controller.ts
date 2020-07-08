import Request from './../Http/Request.ts'
import Response from './../Http/Response.ts'

interface Controller
{
  run(req: Request, res: Response): Promise<Response>
}

export default Controller
