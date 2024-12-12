export interface TelegramError {
  ok: string
  error_code?: number
  description?: string
}

export interface TelegramApiOptions {
  apiKey: string
  baseURL?: string
}

export interface TelegramResponse<T> {
  ok: string
  result: T
}
