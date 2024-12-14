/**
 * Represents a message originally sent by an unknown user.
 */
export interface MessageOriginHiddenUser {
  /**
   * Type of the message origin, always `"hidden_user"`.
   *
   * @example
   * 'hidden_user'
   */
  type: 'hidden_user'

  /**
   * The date when the message was originally sent, in Unix time.
   *
   * @example
   * 1691234567
   */
  date: number

  /**
   * The name of the user who sent the message originally.
   *
   * @example
   * 'anonymous_user'
   */
  sender_user_name: string
}
