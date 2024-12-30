import { ApiAgent } from '@utils/@types'
import { BaseTelegramApiEntityProps } from '@src/@types'
import { createFormData, apiAgentBuilder } from '@src/utils'

export default abstract class BaseTelegramApiEntity {
  private apiAgent: ApiAgent

  constructor(props: BaseTelegramApiEntityProps) {
    const { apiKey, baseUrl = 'https://api.telegram.org', timeout = 10000 } = props
    this.apiAgent = apiAgentBuilder({ baseUrl: `${baseUrl}/bot${apiKey}`, timeout })
  }

  protected jsonCall = <T>(method: string, payload?: Record<string, any>): Promise<T> =>
    this.apiAgent<T>({
      method,
      options: { body: JSON.stringify(payload), headers: { 'Content-Type': 'application/json' } },
    })

  protected formUrlEncodedCall = <T>(method: string, payload?: Record<string, any>): Promise<T> =>
    this.apiAgent<T>({
      method,
      options: {
        body: new URLSearchParams(payload).toString(),
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      },
    })

  protected multipartCall = <T>(method: string, payload: Record<string, any>): Promise<T> =>
    this.apiAgent<T>({
      method,
      options: {
        body: createFormData(payload),
        headers: { 'Content-Type': 'multipart/form-data' },
      },
    })
}
