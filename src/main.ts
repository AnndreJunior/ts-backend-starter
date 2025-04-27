import fastify from 'fastify'
import { env } from '@config/env'
import { mapRoutes } from '@infra/http/routes'
import { internalServerError } from '@shared/http/http-response'

const server = fastify({ logger: true })

server.register(mapRoutes, { prefix: '/api' })

if (env.ENVIRONMENT !== 'development') {
  server.setErrorHandler((err, request, reply) => {
    request.log.error(err)
    const { status, body } = internalServerError('Something went wrong')
    return reply.status(status).send(body)
  })
}

try {
  server.listen({ port: Number.parseInt(env.PORT), host: '0.0.0.0' })
} catch (err) {
  server.log.error(err)
  process.exit(1)
}
