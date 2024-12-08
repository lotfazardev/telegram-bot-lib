import { defaultFetcher } from '../network/Fetcher'
import { TelegramAPIError } from './base-types'

export interface ITelegramAPIOptions {
  apiKey: string
  baseURL?: string
}

export abstract class BaseTelegramAPI {
  protected options: Required<Omit<ITelegramAPIOptions, 'apiKey'>>
  protected baseURL: string

  constructor(options: ITelegramAPIOptions) {
    const { apiKey, baseURL = 'https://api.telegram.org/bot' } = options

    if (!apiKey) {
      throw new Error('API key is required for Telegram API.')
    }

    this.baseURL = `${baseURL}${apiKey}/`
    this.options = {
      baseURL,
    }
  }

  protected async callTelegramMethod<Payload, Result>(
    methodName: string,
    payload?: Payload,
    retries = 3,
    retryDelay = 1000
  ): Promise<Result> {
    const fullURL = `${this.baseURL}${methodName}`

    for (let attempt = 1; attempt <= retries; attempt++) {
      try {
        const response = await defaultFetcher<
          Payload,
          { ok: boolean; result: Result; error_code?: number; description?: string }
        >(fullURL, 'POST', payload)

        if (!response.ok) {
          throw new TelegramAPIError(response.ok, response.error_code, response.description)
        }

        return response.result
      } catch (error) {
        console.warn(`Attempt ${attempt} failed:`, error)

        if (attempt === retries || !(error instanceof TelegramAPIError)) {
          throw error
        }

        await new Promise((resolve) => setTimeout(resolve, retryDelay * Math.pow(2, attempt)))
      }
    }

    throw new Error('Max retries exceeded')
  }
}
