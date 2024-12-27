import BaseTelegramApiEntity from '@core/BaseTelegramApiEntity'
import { GetGameHighScoresParams, SendGameParams, SetGameScoreParams } from './@types'
import { Message } from '@entity/@types/Message'
import { GameHighScore } from '@entity/@types/GameHighScore'

export default class Games extends BaseTelegramApiEntity {
  /**
   * Use this method to send a game. On success, the sent Message is returned.
   */
  async sendGame(sendGameParams: SendGameParams) {
    return this.jsonCall<Message>('sendGame', sendGameParams)
  }

  /**
   * Use this method to set the score of the specified user in a game message.
   * On success, if the message is not an inline message, the Message is returned,
   * otherwise True is returned.
   */
  async setGameScore(setGameScoreParams: SetGameScoreParams) {
    return this.jsonCall<Message | boolean>('setGameScore', setGameScoreParams)
  }

  /**
   * Use this method to get data for high score tables.
   * On success, returns an array of GameHighScore objects.
   */
  async getGameHighScores(getGameHighScoresParams: GetGameHighScoresParams) {
    return this.jsonCall<GameHighScore[]>('getGameHighScores', getGameHighScoresParams)
  }
}
