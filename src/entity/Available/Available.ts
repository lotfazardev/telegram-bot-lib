import BaseTelegramApiEntity from '@core/BaseTelegramApiEntity'

//params types
import { SendMessageParams } from '@entity/Available/@types/SendMessageParams'
import { SendChatActionParams } from '@entity/Available/@types/SendChatActionParams'
import { GetUserProfilePhotosParams } from '@entity/Available/@types/GetUserProfilePhotosParams'
//response types
import { Message } from '@entity/@types/Message'
import { ChatFullInfo } from '@entity/@types/ChatFullInfo'
import { User } from '@entity/@types/User'
import { UserProfilePhotos } from '@entity/@types/UserProfilePhotos'

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

  async getUserProfilePhotos(getUserProfilePhotosParams: GetUserProfilePhotosParams) {
    return this.apiAgent<UserProfilePhotos>({
      method: 'getUserProfilePhotos',
      options: { body: JSON.stringify(getUserProfilePhotosParams) },
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
