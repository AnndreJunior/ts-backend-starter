export type HttpContext<T> = {
  body: T
  headers: Record<string, string | string[] | undefined>
  params: Record<string, string | undefined>
  query: Record<string, string | string[] | undefined>
}
