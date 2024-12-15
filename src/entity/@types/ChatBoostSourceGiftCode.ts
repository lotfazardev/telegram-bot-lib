import { User } from './User'

/**
 * Represents a chat boost obtained through the creation of Telegram Premium gift codes.
 * Each gift code boosts the chat 4 times for the duration of the corresponding Telegram
 * Premium subscription.
 *
 * @see {@link User} - The user for whom the gift code was created.
 */
export interface ChatBoostSourceGiftCode {
  /**
   * The source of the boost, always "gift_code".
   */
  source: 'gift_code'

  /**
   * The user for which the gift code was created.
   *
   * @see {@link User} for more details about the user who received the gift code.
   */
  user: User
}
