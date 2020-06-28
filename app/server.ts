import { serve } from 'https://deno.land/std/http/server.ts'
import { readFileStr } from "https://deno.land/std/fs/mod.ts";

const server = serve({port: 80})
console.log('Server start')

for await (const request of server)
{
  readFileStr('./Views/index.html').then((html: string) => {
    request.respond({
      body: html
    })
  })
}
