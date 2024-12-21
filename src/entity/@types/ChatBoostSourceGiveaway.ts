import { User } from './User'

/**
 * Represents a chat boost obtained through the creation of a Telegram Premium or
 * Telegram Star giveaway. The boost lasts for different durations based on the type
 * of giveaway.
 *
 * - For Telegram Premium giveaways: The chat is boosted 4 times for the duration
 *   of the corresponding Telegram Premium subscription.
 * - For Telegram Star giveaways: The chat is boosted a number of times determined
 *   by the prize_star_count / 500 times for one year.
 *
 * @see {@link User} - The user who won the giveaway prize (for Telegram Premium giveaways).
 */
export interface ChatBoostSourceGiveaway {
  /**
   * The source of the boost, always "giveaway".
   */
  source: 'giveaway'

  /**
   * Identifier of the message in the chat with the giveaway. The message could have
   * been deleted already. May be 0 if the message hasn't been sent yet.
   */
  giveaway_message_id: number

  /**
   * The user that won the prize in the giveaway. This field is optional and
   * only applies to Telegram Premium giveaways.
   *
   * @see {@link User} for more details about the user who won the prize.
   */
  user?: User

  /**
   * The number of Telegram Stars to be split between giveaway winners. This field
   * is optional and only applies to Telegram Star giveaways.
   */
  prize_star_count?: number

  /**
   * Indicates whether the giveaway was completed, but no user won the prize.
   * This field is optional.
   */
  is_unclaimed?: boolean
}
