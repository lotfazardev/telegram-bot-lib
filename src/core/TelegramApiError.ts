export class TelegramApiError extends Error {
  public ok: string
  public error_code?: number

  constructor(ok: string, error_code?: number, description?: string) {
    super(description)
    this.name = 'TelegramAPIError'
    this.ok = ok
    this.error_code = error_code

    Object.setPrototypeOf(this, TelegramApiError.prototype)
  }
}
