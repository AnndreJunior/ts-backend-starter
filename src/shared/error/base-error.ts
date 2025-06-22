export abstract class BaseError extends Error {
  protected constructor(
    public readonly title: string,
    public readonly message: string,
  ) {
    super(message)
  }
}
