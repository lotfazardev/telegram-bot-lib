import { Message } from './Message'

/**
 * Represents a service message about the completion of a giveaway without public winners.
 *
 * This object contains details about the giveaway's completion, including the number of winners, any undistributed prizes,
 * and information about the message related to the giveaway. Additionally, it can indicate whether the giveaway was a
 * Telegram Star giveaway or a Telegram Premium giveaway.
 *
 * @remarks
 * - The `winner_count` field indicates how many users won the giveaway.
 * - The `unclaimed_prize_count` field represents any prizes that were not claimed.
 * - The `giveaway_message` field, if present, provides a reference to the original message that described the giveaway.
 *
 * @example
 * ```typescript
 * const giveawayCompleted: GiveawayCompleted = {
 *   winner_count: 5,
 *   unclaimed_prize_count: 2,
 *   giveaway_message: { message_id: 123456, text: "Congratulations! You won a giveaway!" },
 * };
 * ```
 * This example shows how the `GiveawayCompleted` object can be used to track the completion of a giveaway,
 * including information about winners, undistributed prizes, and the original giveaway message.
 *
 * @see {@link Message} for more details about the `giveaway_message` field.
 */
export interface GiveawayCompleted {
  /**
   * The number of winners in the giveaway.
   *
   * @example
   * 5 // Number of winners
   */
  winner_count: number

  /**
   * Optional. The number of undistributed prizes in the giveaway.
   *
   * @example
   * 2 // Number of prizes that were not claimed by winners
   */
  unclaimed_prize_count?: number

  /**
   * Optional. The message with the giveaway that was completed, if it wasn't deleted.
   *
   * @example
   * { message_id: 123456, text: "Congratulations! You won a giveaway!" } // Giveaway message
   *
   * @see {@link Message}
   */
  giveaway_message?: Message

  /**
   * Optional. If true, indicates that the giveaway is a Telegram Star giveaway.
   * If false, it is a Telegram Premium giveaway.
   *
   * @example
   * true // Indicates that the giveaway is for Telegram Stars
   */
  is_star_giveaway?: true
}
