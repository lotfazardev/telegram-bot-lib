import BaseTelegramApiEntity from '@core/BaseTelegramApiEntity'
import { Message } from '@entity/@types/Message'
import { SendGameParams } from './@types'

export default class Games extends BaseTelegramApiEntity {
  /**
   * Use this method to send a game. On success, the sent Message is returned.
   */
  async sendGame(sendGameParams: SendGameParams) {
    return this.jsonCall<Message>('sendGame', sendGameParams)
  }
}
