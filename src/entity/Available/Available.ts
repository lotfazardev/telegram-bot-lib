import BaseTelegramApiEntity from '@core/BaseTelegramApiEntity'

//params types
import { SendMessageParams } from '@entity/Available/@types/SendMessageParams'
import { SendChatActionParams } from '@entity/Available/@types/SendChatActionParams'

//response types
import { Message } from '@entity/@types/Message'
import { ChatFullInfo } from '@entity/@types/ChatFullInfo'
import { User } from '@entity/@types/User'

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

  async sendChatAction(sendChatActionParams: SendChatActionParams) {
    return this.apiAgent<true>({
      method: 'sendChatAction',
      options: {
        body: JSON.stringify(sendChatActionParams),
      },
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
