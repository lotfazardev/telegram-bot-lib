import { BaseTelegramAPI } from '../../core/base-telegram-api'
import { Chat } from '../../@types/Chat'
import { User } from '../../@types/User'
import { SendMessageProps, SendMessageResponse } from './types'

export class Methods extends BaseTelegramAPI {
  async getMe() {
    return this.callTelegramMethod<{}, User>('getMe', {})
  }
  async sendMessage(props: SendMessageProps) {
    return this.callTelegramMethod<SendMessageProps, SendMessageResponse>('sendMessage', props)
  }
}
