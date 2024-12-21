import { Chat } from './Chat'
import { User } from './User'

/**
 * Represents a message about the completion of a giveaway with public winners.
 *
 * This object is received when a giveaway ends, providing detailed information about the giveaway results.
 * It includes the list of winners, the time when winners were selected, the number of winners, any additional prizes,
 * and other relevant details like whether the giveaway was refunded or if only new members were eligible.
 *
 * @remarks
 * - The `chat` field contains information about the chat where the giveaway was created.
 * - The `winners` field contains a list of up to 100 users who won the giveaway.
 * - Optional fields such as `additional_chat_count`, `prize_description`, and `was_refunded` allow for more detailed information about the giveaway process.
 *
 * @example
 * ```typescript
 * const giveawayWinners: GiveawayWinners = {
 *   chat: { id: 123456, title: 'Chat for Giveaway', type: 'public' },
 *   giveaway_message_id: 654321,
 *   winners_selection_date: 1672531199, // Unix timestamp for the winner selection date
 *   winner_count: 5,
 *   winners: [
 *     { id: 111, first_name: 'John', username: 'john_doe' },
 *     { id: 112, first_name: 'Jane', username: 'jane_doe' },
 *   ],
 *   additional_chat_count: 3,
 *   premium_subscription_month_count: 6, // 6 months of Telegram Premium for winners
 *   unclaimed_prize_count: 2,
 *   prize_description: "Exclusive Telegram Premium subscription for the winners",
 * };
 * ```
 * This example shows how to instantiate a `GiveawayWinners` object with details about the giveaway results, including
 * the number of winners, their Telegram usernames, and additional prize details.
 *
 * @see [GiveawayWinners Documentation](https://core.telegram.org/bots/api#giveawaywinners)
 * @see {@link Chat} for more information about the `chat` field.
 * @see {@link User} for more information about the `winners` field.
 */
export interface GiveawayWinners {
  /**
   * The chat that created the giveaway.
   *
   * @example
   * { id: 123456, title: 'Chat for Giveaway', type: 'public' }
   * The `Chat` object represents the chat where the giveaway was held.
   *
   * @see {@link Chat}
   */
  chat: Chat

  /**
   * The identifier of the message containing the giveaway in the chat.
   *
   * @example
   * 654321
   * The unique ID of the message related to the giveaway.
   */
  giveaway_message_id: number

  /**
   * The point in time (Unix timestamp) when the winners of the giveaway were selected.
   *
   * @example
   * 1672531199 // Unix timestamp for the winners' selection time
   */
  winners_selection_date: number

  /**
   * The total number of winners in the giveaway.
   *
   * @example
   * 5 // Total number of winners
   */
  winner_count: number

  /**
   * The list of up to 100 users who won the giveaway.
   *
   * @example
   * [
   *   { id: 111, first_name: 'John', username: 'john_doe' },
   *   { id: 112, first_name: 'Jane', username: 'jane_doe' }
   * ]
   * The array of `User` objects representing the winners of the giveaway.
   *
   * @see {@link User}
   */
  winners: User[]

  /**
   * Optional. The number of additional chats the user had to join in order to be eligible for the giveaway.
   *
   * @example
   * 3 // The user had to join 3 additional chats
   */
  additional_chat_count?: number

  /**
   * Optional. The number of months the Telegram Premium subscription won from the giveaway will be active for.
   * This field is only relevant for Telegram Premium giveaways.
   *
   * @example
   * 6 // Winners receive a 6-month Telegram Premium subscription
   */
  premium_subscription_month_count?: number

  /**
   * Optional. The number of undistributed prizes.
   *
   * @example
   * 2 // Two prizes were unclaimed by the winners
   */
  unclaimed_prize_count?: number

  /**
   * Optional. If true, only users who had joined the chats after the giveaway started were eligible to win.
   *
   * @example
   * true // Only new members are eligible for the giveaway
   */
  only_new_members?: true

  /**
   * Optional. If true, the giveaway was canceled because the payment for it was refunded.
   *
   * @example
   * true // The giveaway was refunded
   */
  was_refunded?: true

  /**
   * Optional. A description of the additional giveaway prize.
   *
   * @example
   * "Exclusive Telegram Premium subscription for the winners" // Description of the prize
   */
  prize_description?: string
}
