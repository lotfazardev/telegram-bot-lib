export * from '@constant/@types'
export * from '@core/@types'
export * from '@entity/@types'

export interface BaseTelegramApiEntityProps {
  apiKey: string
  baseUrl?: string
  timeout?: number
}

export interface TelegramApiOptions extends BaseTelegramApiEntityProps {}
