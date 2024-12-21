import { ChatBoost } from './ChatBoost'

/**
 * Represents a list of boosts added to a chat by a user.
 *
 * This object contains an array of `ChatBoost` objects, each of which represents
 * a single boost that was added to the chat by the user. It provides details about
 * the boosts, such as the boost's identifier, source, and timestamps.
 *
 * @see {@link ChatBoost} - Contains detailed information about a single boost applied to the chat.
 */
export interface UserChatBoosts {
  /**
   * A list of boosts that were added to the chat by the user.
   *
   * Each entry in the array corresponds to a boost added by the user. The `ChatBoost` object
   * contains information such as the unique boost ID, source, and expiration date.
   *
   * @see {@link ChatBoost} for detailed information on each boost.
   */
  boosts: ChatBoost[]
}
