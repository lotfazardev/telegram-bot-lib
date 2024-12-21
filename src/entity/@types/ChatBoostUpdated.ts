import { Chat } from './Chat'
import { ChatBoost } from './ChatBoost'

/**
 * Represents a boost that has been added to or changed in a chat.
 *
 * This object contains information about the chat that was boosted,
 * as well as the details of the boost itself, which may have been
 * updated or newly applied.
 *
 * @see {@link Chat} - Information about the chat that was boosted.
 * @see {@link ChatBoost} - Detailed information about the boost applied to the chat.
 */
export interface ChatBoostUpdated {
  /**
   * The chat that was boosted.
   *
   * @see {@link Chat} for details about the specific chat.
   */
  chat: Chat

  /**
   * Information about the applied chat boost.
   *
   * @see {@link ChatBoost} for the details about the boost, including when it was added
   * and its source.
   */
  boost: ChatBoost
}
