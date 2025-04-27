import { HttpContext } from '@shared/http/http-context'
import { SayHelloController } from './say-hello-controller'

describe('SayHelloController', () => {
  it('should return a 200 status with "Hello World" message', async () => {
    // Arrange
    const controller = new SayHelloController()
    const ctx: HttpContext<unknown> = {
      body: {},
      headers: {},
      params: {},
      query: {},
    }

    // Act
    const response = await controller.handleAsync(ctx)

    // Assert
    expect(response.status).toBe(200)
    expect(response.body).toEqual({ message: 'Hello World!' })
  })
})
