import AppRequest from './Http/Implements/StdRequest.ts'
import AppResponse from './Http/Implements/StdResponse.ts'
import Controller from './Controllers/Controller.ts'
import { serve } from 'https://deno.land/std/http/server.ts'
import SimpleFileController from './Controllers/SimpleFile.ts'

const server = serve({port: 80})
console.log('Server start')

for await (const request of server)
{
  const appRequest = new AppRequest(request)
  const appResponse = new AppResponse(request)
  let controller: Controller

  switch(request.url){
    case '/':
      controller = new SimpleFileController('./Views/index.html')
      break
    case '/create/':
      controller = new SimpleFileController('./Views/form.html')
      break
    default:
      controller = new SimpleFileController('./Views/error404.html')
  }

  controller.run(appRequest, appResponse)
}
