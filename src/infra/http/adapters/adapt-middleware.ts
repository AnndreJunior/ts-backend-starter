/* eslint-disable @typescript-eslint/no-explicit-any */
import { FastifyReply, FastifyRequest } from 'fastify'
import { Middleware } from '@shared/http/middleware'
import { HttpResponse } from '@shared/http/http-response'
import { HttpContext } from '@shared/http/http-context'

function isHttpResponse(obj: any): obj is HttpResponse {
  return (
    typeof obj === 'object' &&
    'status' in obj &&
    typeof obj['status'] === 'number' &&
    'body' in obj
  )
}

export function adaptMiddleware(middleware: Middleware) {
  return async (request: FastifyRequest, reply: FastifyReply) => {
    const ctx: HttpContext<any> = {
      body: request.body,
      headers: request.headers,
      params: request.params as Record<string, string | undefined>,
      query: request.query as Record<string, string | string[] | undefined>,
    }

    const response = await middleware.handleAsync(ctx)

    if (isHttpResponse(response)) {
      const { status, body } = response
      reply.status(status).send(body)
    } else {
      request.body = ctx.body
      request.headers = ctx.headers
      request.params = ctx.params
      request.query = ctx.query
    }
  }
}
