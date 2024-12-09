import { TelegramAPIError } from '../core/base-types'
import { ITelegramError } from '../core/base-types'

export type fetcherOpts = Partial<{
  baseURL: string
  timeout: number
  proxyUrl: string
  retries: number
  retryDelay: number
}>

export async function defaultFetcher<Payload, Result>(
  url: string,
  method: string,
  payload?: Payload
): Promise<Result> {
  const controller = new AbortController()
  const timeoutId = setTimeout(() => controller.abort(), 10000)

  try {
    const response = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: payload ? JSON.stringify(payload) : undefined,
      signal: controller.signal,
    })

    clearTimeout(timeoutId)

    if (!response.ok) {
      const errorBody = (await response.json().catch(() => null)) as ITelegramError
      throw new TelegramAPIError(
        'false',
        errorBody?.error_code,
        errorBody?.description || `HTTP error! status: ${response.status}`
      )
    }

    return (await response.json()) as Result
  } finally {
    clearTimeout(timeoutId)
  }
}
