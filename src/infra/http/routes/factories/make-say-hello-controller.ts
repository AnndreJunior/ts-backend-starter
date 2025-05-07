import { SayHelloController } from '@modules/health-check/controllers/say-hello-controller'

export function makeSayHelloController(): SayHelloController {
  return new SayHelloController()
}
