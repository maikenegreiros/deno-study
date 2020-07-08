interface Router
{
  get(path: string, controller: CallableFunction): void

  post(path: string, controller: CallableFunction): void
}

export default Router
