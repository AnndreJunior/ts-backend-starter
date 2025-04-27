import { HttpContext } from './http-context'
import { HttpResponse } from './http-response'

// returns true if the request must continue to the controller or another middleware
export interface Middleware<T = unknown> {
  handleAsync(ctx: HttpContext<T>): Promise<true | HttpResponse>
}
