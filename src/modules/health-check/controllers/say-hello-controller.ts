import { Controller } from '@shared/http/controller'
import { HttpContext } from '@shared/http/http-context'
import { HttpResponse, ok } from '@shared/http/http-response'

export class SayHelloController implements Controller {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async handleAsync(ctx: HttpContext<unknown>): Promise<HttpResponse> {
    return ok({ message: 'Hello World!' })
  }
}
