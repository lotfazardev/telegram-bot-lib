import BaseTelegramApiEntity from '@core/BaseTelegramApiEntity'
import { User } from '../@types/User'
import { ChatFullInfo } from '../@types/ChatFullInfo'

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
}
