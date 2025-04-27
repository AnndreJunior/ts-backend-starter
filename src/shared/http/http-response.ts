import { ProblemDetails } from './problem-details'
import { RedirectDetails } from './redirect-details'

export type HttpResponse = {
  status: number
  body: unknown | ProblemDetails | RedirectDetails
}

export function problem(
  status: number,
  title: string,
  message: string,
): HttpResponse {
  return {
    status: status,
    body: { title, message, status } as ProblemDetails,
  }
}

export function badRequest(
  message: string,
  title = 'Bad Request',
): HttpResponse {
  return problem(400, title, message)
}

export function unauthorized(
  message: string,
  title = 'Unauthorized',
): HttpResponse {
  return problem(401, title, message)
}

export function forbidden(message: string, title = 'Forbidden'): HttpResponse {
  return problem(403, title, message)
}

export function notFound(message: string, title = 'Not Found'): HttpResponse {
  return problem(404, title, message)
}

export function conflict(message: string, title = 'Conflict'): HttpResponse {
  return problem(409, title, message)
}

export function unprocessableEntity(
  message: string,
  title = 'Unprocessable Entity',
): HttpResponse {
  return problem(422, title, message)
}

export function internalServerError(
  message: string,
  title = 'Internal Server Error',
): HttpResponse {
  return problem(500, title, message)
}

export function badGateway(
  message: string,
  title = 'Bad Gateway',
): HttpResponse {
  return problem(502, title, message)
}

export function serviceUnavailable(
  message: string,
  title = 'Service Unavailable',
): HttpResponse {
  return problem(503, title, message)
}

export function ok(body?: unknown): HttpResponse {
  return { status: 200, body: body ?? null }
}

export function created(body?: unknown): HttpResponse {
  return { status: 201, body: body ?? null }
}

export function accepted(body?: unknown): HttpResponse {
  return { status: 202, body: body ?? null }
}

export function noContent(): HttpResponse {
  return { status: 204, body: null }
}

export function movedPermanently(
  location: string,
  title = 'Moved Permanently',
  message?: string,
): HttpResponse {
  return {
    status: 301,
    body: { location, status: 301, title, message } as RedirectDetails,
  }
}

export function found(
  location: string,
  title = 'Found',
  message?: string,
): HttpResponse {
  return {
    status: 302,
    body: { location, status: 302, title, message } as RedirectDetails,
  }
}

export function seeOther(
  location: string,
  title = 'See Other',
  message?: string,
): HttpResponse {
  return {
    status: 303,
    body: { location, status: 303, title, message } as RedirectDetails,
  }
}

export function temporaryRedirect(
  location: string,
  title = 'Temporary Redirect',
  message?: string,
): HttpResponse {
  return {
    status: 307,
    body: { location, status: 307, title, message } as RedirectDetails,
  }
}

export function permanentRedirect(
  location: string,
  title = 'Permanent Redirect',
  message?: string,
): HttpResponse {
  return {
    status: 308,
    body: { location, status: 308, title, message } as RedirectDetails,
  }
}
