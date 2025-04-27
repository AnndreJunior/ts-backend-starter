import { HttpContext } from './http-context'
import { HttpResponse } from './http-response'

export interface Controller<T = unknown> {
  handleAsync(ctx: HttpContext<T>): Promise<HttpResponse>
}
