import { SqliteError } from 'better-sqlite3'

export function staticImplements<T>() {
  return <U extends T>(constructor: U): void => {
    constructor
  }
}

export function getErrorMessage(error: unknown): string | unknown {
  if (error instanceof SqliteError) {
    return error?.message
  }
  return error
}
