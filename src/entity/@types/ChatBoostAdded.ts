/**
 * Represents a service message about a user boosting a chat.
 * - {@link https://core.telegram.org/bots/api#service-messages | Service Messages Documentation}
 */
export interface ChatBoostAdded {
  /**
   * The number of boosts added by the user.
   * - {@link Number} - The count of boosts contributed to the chat.
   */
  boost_count: number
}
