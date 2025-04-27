export class Success<V, E> {
  readonly value: V

  constructor(value: V) {
    this.value = value
  }

  isSuccess(): this is Success<V, E> {
    return true
  }

  isFailure(): this is Failure<V, E> {
    return false
  }
}

export class Failure<V, E> {
  readonly error: E

  constructor(error: E) {
    this.error = error
  }

  isSuccess(): this is Success<V, E> {
    return false
  }

  isFailure(): this is Failure<V, E> {
    return true
  }
}

export type Either<V, E> = Success<V, E> | Failure<V, E>

export function success<V, E>(value: V) {
  return new Success<V, E>(value)
}

export function failure<V, E>(error: E) {
  return new Failure<V, E>(error)
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function combine<E>(results: Either<any, E>[]): Either<void, E> {
  for (const result of results) {
    if (result.isFailure()) return result
  }
  return success(undefined)
}
