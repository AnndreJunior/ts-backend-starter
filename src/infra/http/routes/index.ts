import { FastifyInstance, HookHandlerDoneFunction } from 'fastify'
import { adaptController } from '../adapters/adapt-controller'
import { makeSayHelloController } from './factories/make-say-hello-controller'

export function mapRoutes(
  server: FastifyInstance,
  _: unknown,
  done: HookHandlerDoneFunction,
) {
  server.route({
    method: 'GET',
    url: '/hello-world',
    handler: adaptController(makeSayHelloController()),
  })
  done()
}
