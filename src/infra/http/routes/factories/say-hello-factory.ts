import { SayHelloController } from '@modules/health-check/controllers/say-hello-controller'

export function sayHelloFactory(): SayHelloController {
  return new SayHelloController()
}
