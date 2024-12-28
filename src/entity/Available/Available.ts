import BaseTelegramApiEntity from '@core/BaseTelegramApiEntity'

//params types
import { SendMessageParams } from '@entity/Available/@types/SendMessageParams'
import { SendChatActionParams } from '@entity/Available/@types/SendChatActionParams'
import { GetUserProfilePhotosParams } from '@entity/Available/@types/GetUserProfilePhotosParams'
import { SendPhotoParams } from '@entity/Available/@types/sendPhotoParams'
//response types
import { Message } from '@entity/@types/Message'
import { ChatFullInfo } from '@entity/@types/ChatFullInfo'
import { User } from '@entity/@types/User'
import { UserProfilePhotos } from '@entity/@types/UserProfilePhotos'
import { SendAudioParams } from './@types/SendAudioParams'
import { SendDocumentParams } from './@types/SendDocumentParams'
export default class Available extends BaseTelegramApiEntity {
  async getMe() {
    return this.jsonCall<User>('getMe')
  }
  async sendMessage(sendMessageParams: SendMessageParams) {
    return this.jsonCall<Message>('sendMessage', sendMessageParams)
  }

  async sendPhoto(sendPhotoParams: SendPhotoParams) {
    return this.multipartCall<Message>('sendPhoto', sendPhotoParams)
  }

  async sendAudio(sendAudioParams: SendAudioParams) {
    return this.multipartCall<Message>('sendAudio', sendAudioParams)
  }

  async sendDocument(sendDocumentParams: SendDocumentParams) {
    return this.multipartCall<Message>('sendDocument', sendDocumentParams)
  }

  async sendChatAction(sendChatActionParams: SendChatActionParams) {
    return this.jsonCall<true>('sendChatAction', sendChatActionParams)
  }

  async getUserProfilePhotos(getUserProfilePhotosParams: GetUserProfilePhotosParams) {
    return this.jsonCall<UserProfilePhotos>('getUserProfilePhotos', getUserProfilePhotosParams)
  }

  async getChat(chat_id: number | string) {
    return this.jsonCall<ChatFullInfo>('getChat', { chat_id })
  }
}
