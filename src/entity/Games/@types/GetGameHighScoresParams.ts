/**
 * Represents the parameters required to get high scores for a game.
 */
export interface GetGameHighScoresParams {
  /**
   * Required. Target user ID.
   */
  user_id: number

  /**
   * Optional. Unique identifier for the target chat.
   * Required if `inline_message_id` is not specified.
   */
  chat_id?: number

  /**
   * Optional. Identifier of the sent message.
   * Required if `inline_message_id` is not specified.
   */
  message_id?: number

  /**
   * Optional. Identifier of the inline message.
   * Required if `chat_id` and `message_id` are not specified.
   */
  inline_message_id?: string
}
