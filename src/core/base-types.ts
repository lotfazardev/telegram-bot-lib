export class TelegramAPIError extends Error {
  public ok: boolean
  public error_code?: number

  constructor(ok: boolean, error_code?: number, description?: string) {
    super(description)
    this.name = 'TelegramAPIError'
    this.ok = ok
    this.error_code = error_code

    Object.setPrototypeOf(this, TelegramAPIError.prototype)
  }
}

export interface ITelegramError {
  ok: boolean
  error_code?: number
  description?: string
}

export interface ITelegramResponse<T> {
  ok: boolean
  result: T
}

export type ITelegramApiResponse<T> = Promise<ITelegramResponse<T> | ITelegramError>
