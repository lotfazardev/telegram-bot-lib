import { ApiAgent, ApiAgentBuilderProps } from '@utils/@types'
import apiAgentBuilder from '@utils/apiAgentBuilder'

export interface BaseTelegramApiEntityProps {
  apiKey: string
  baseUrl?: string
  timeout?: number
}

export default abstract class BaseTelegramApiEntity {
  protected apiAgent: ApiAgent

  constructor(props: BaseTelegramApiEntityProps) {
    const { apiKey, baseUrl = 'https://api.telegram.org', timeout = 10000 } = props
    this.apiAgent = apiAgentBuilder({ baseUrl: `${baseUrl}/bot${apiKey}`, timeout })
  }
}
