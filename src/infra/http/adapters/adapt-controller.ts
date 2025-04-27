/* eslint-disable @typescript-eslint/no-explicit-any */
import { FastifyReply, FastifyRequest } from 'fastify'
import { Controller } from '@shared/http/controller'
import { HttpContext } from '@shared/http/http-context'

export function adaptController(controller: Controller) {
  return async (request: FastifyRequest, reply: FastifyReply) => {
    const ctx: HttpContext<any> = {
      body: request.body,
      headers: request.headers,
      params: request.params as Record<string, string | undefined>,
      query: request.query as Record<string, string | string[] | undefined>,
    }

    const { status, body } = await controller.handleAsync(ctx)

    reply.status(status).send(body)
  }
}
