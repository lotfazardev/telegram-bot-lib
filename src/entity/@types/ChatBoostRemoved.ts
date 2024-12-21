import { Chat } from './Chat'
import { ChatBoostSource } from './ChatBoostSource'

/**
 * Represents a boost that has been removed from a chat.
 *
 * This object contains information about the chat from which the boost was removed,
 * along with the boost's unique identifier and source. It also includes the
 * timestamp when the boost was removed.
 *
 * @see {@link Chat} - Information about the chat from which the boost was removed.
 * @see {@link ChatBoostSource} - Details about the source of the removed boost.
 */
export interface ChatBoostRemoved {
  /**
   * The chat from which the boost was removed.
   *
   * @see {@link Chat} for details about the specific chat.
   */
  chat: Chat

  /**
   * Unique identifier for the removed boost.
   *
   * This identifier allows the system to track which boost was removed.
   */
  boost_id: string

  /**
   * The Unix timestamp when the boost was removed.
   *
   * This field indicates the exact moment the boost was no longer applied to the chat.
   */
  remove_date: number

  /**
   * The source of the removed boost.
   *
   * @see {@link ChatBoostSource} for the origin of the boost (e.g., premium subscription, gift code, etc.).
   */
  source: ChatBoostSource
}
