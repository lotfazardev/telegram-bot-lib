/**
 * Represents the parameters required to set the score of a user in a game message.
 */
export interface SetGameScoreParams {
  /**
   * Required. User identifier.
   */
  user_id: number

  /**
   * Required. New score, must be non-negative.
   */
  score: number

  /**
   * Optional. Pass True if the high score is allowed to decrease. This can be useful when fixing mistakes or banning cheaters.
   */
  force?: boolean

  /**
   * Optional. Pass True if the game message should not be automatically edited to include the current scoreboard.
   */
  disable_edit_message?: boolean

  /**
   * Optional. Required if inline_message_id is not specified. Unique identifier for the target chat.
   */
  chat_id?: number

  /**
   * Optional. Required if inline_message_id is not specified. Identifier of the sent message.
   */
  message_id?: number

  /**
   * Optional. Required if chat_id and message_id are not specified. Identifier of the inline message.
   */
  inline_message_id?: string
}
