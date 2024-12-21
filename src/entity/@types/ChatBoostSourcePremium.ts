import { User } from './User'

/**
 * Represents a chat boost obtained by subscribing to Telegram Premium or by gifting a
 * Telegram Premium subscription to another user.
 *
 * @see {@link User} - The user who boosted the chat. This can either be the user who
 * subscribed to Telegram Premium or the user who gifted the subscription.
 */
export interface ChatBoostSourcePremium {
  /**
   * The source of the boost, always "premium".
   */
  source: 'premium'

  /**
   * The user who boosted the chat.
   *
   * @see {@link User} for more details on the user.
   */
  user: User
}
