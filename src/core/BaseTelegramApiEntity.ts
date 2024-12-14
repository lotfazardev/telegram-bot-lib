import { BaseTelegramApiEntityProps } from '@src/@types'
import { ApiAgent } from '@utils/@types'
import apiAgentBuilder from '@utils/apiAgentBuilder'

export default abstract class BaseTelegramApiEntity {
  protected apiAgent: ApiAgent

  constructor(props: BaseTelegramApiEntityProps) {
    const { apiKey, baseUrl = 'https://api.telegram.org', timeout = 10000 } = props
    this.apiAgent = apiAgentBuilder({ baseUrl: `${baseUrl}/bot${apiKey}`, timeout })
  }
}
