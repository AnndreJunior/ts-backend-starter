import { FastifyInstance, HookHandlerDoneFunction } from 'fastify'
import { adaptController } from '../adapters/adapt-controller'
import { sayHelloFactory } from './factories/say-hello-factory'

export function mapRoutes(
  server: FastifyInstance,
  _: unknown,
  done: HookHandlerDoneFunction,
) {
  server.route({
    method: 'GET',
    url: '/hello-world',
    handler: adaptController(sayHelloFactory()),
  })
  done()
}
