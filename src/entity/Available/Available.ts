import BaseTelegramApiEntity from '@core/BaseTelegramApiEntity'
import { User } from '../@types/User'
import { Message } from '@entity/@types/Message'
import { SendMessageParams } from './@types/SendMessageParams'

export default class Available extends BaseTelegramApiEntity {
  async getMe() {
    return this.apiAgent<User>({
      method: 'getMe',
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
