import { serve, ServerRequest } from 'https://deno.land/std/http/server.ts'
import { readFileStr } from "https://deno.land/std/fs/mod.ts";

const server = serve({port: 80})
console.log('Server start')

for await (const request of server)
{
  let fileRead: Promise<string>

  switch(request.url){
    case '/':
      fileRead = readFileStr('./Views/index.html')
      break
    case '/create/':
      fileRead = readFileStr('./Views/form.html')
      break
    default:
      fileRead = readFileStr('./Views/error404.html')
  }

  fileRead.then((fileContent: string) => {
    response(request, fileContent)
  })
}

function response(request: ServerRequest, body: string): void
{
  request.respond({
    body: body
  })
}
