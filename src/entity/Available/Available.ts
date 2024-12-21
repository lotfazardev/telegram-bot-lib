import BaseTelegramApiEntity from '@core/BaseTelegramApiEntity'
import { User } from '../@types/User'
import { SendChatActionParams } from './@types/sendChatActionParams'

export default class Available extends BaseTelegramApiEntity {
  async getMe() {
    return this.apiAgent<User>({
      method: 'getMe',
    })
  }
  async sendChatAction(sendChatActionParams: SendChatActionParams) {
    return this.apiAgent<true>({
      method: 'sendChatAction',
      options: {
        body: JSON.stringify(sendChatActionParams),
      },
    })
  }
}
