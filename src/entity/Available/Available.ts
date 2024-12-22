import BaseTelegramApiEntity from '@core/BaseTelegramApiEntity'
import { User } from '../@types/User'
import { Message } from '@entity/@types/Message'
import { ChatFullInfo } from '../@types/ChatFullInfo'
import { SendMessageParams } from './@types/SendMessageParams'

export default class Available extends BaseTelegramApiEntity {
  async getMe() {
    return this.apiAgent<User>({
      method: 'getMe',
    })
  }
  async getChat(chat_id: number | string) {
    return this.apiAgent<ChatFullInfo>({
      method: 'getChat',
      options: {
        body: JSON.stringify({ chat_id }),
      },
    })
  }
  async sendMessage(sendMessageParams: SendMessageParams) {
    return this.apiAgent<Message>({
      method: 'sendMessage',
      options: {
        body: JSON.stringify(sendMessageParams),
      },
    })
  }
}
