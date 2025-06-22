/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpResponse, internalServerError } from '@shared/http/http-response'
import { BaseError } from '../base-error'
import { logger } from '@config/logger'

type CustomErrorConstructor = new (...args: any[]) => BaseError
type ErrorHandlerFunction = (error: BaseError) => HttpResponse
type ErrorEntry = [CustomErrorConstructor, ErrorHandlerFunction]
type ErrorMaps = [] | ErrorEntry[]

/**
 * Register your error and the respective http method in the array
 * Example: [CustomError, ({ title, message }) => badRequest(message, title)]
 */
const errors: ErrorMaps = []

const errorsMap = new Map<CustomErrorConstructor, ErrorHandlerFunction>(errors)

export function handleCustomError(error: BaseError): HttpResponse {
  for (const [ErrorType, handler] of errorsMap.entries()) {
    if (error instanceof ErrorType) {
      return handler(error)
    }
  }
  logger.error(error, 'an unexpected error occurred')
  return internalServerError('An unexpected error occurred during the request')
}
