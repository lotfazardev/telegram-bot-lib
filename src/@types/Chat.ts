/**
 * Represents the type of a Telegram chat.
 *
 * Possible values:
 * - `'private'`: A private one-on-one chat.
 * - `'group'`: A basic group chat with multiple participants.
 * - `'supergroup'`: A supergroup chat, usually larger and with additional features.
 * - `'channel'`: A channel used for broadcasting messages to an audience.
 */
export type ChatType = 'private' | 'group' | 'supergroup' | 'channel'

/**
 * This interface represents a chat in Telegram.
 */
export interface Chat {
  /**
   * Unique identifier for this chat.
   * This number may have more than 32 significant bits, so use a 64-bit integer or double-precision float to safely store it.
   */
  id: number

  /**
   * Type of the chat. For details, see {@link ChatType}.
   */
  type: ChatType

  /**
   * Title of the chat (optional).
   * Available for supergroups, channels, and group chats.
   */
  title?: string

  /**
   * Username of the chat (optional).
   * Available for private chats, supergroups, and channels, if set.
   */
  username?: string

  /**
   * First name of the other party in a private chat (optional).
   */
  first_name?: string

  /**
   * Last name of the other party in a private chat (optional).
   */
  last_name?: string

  /**
   * Indicates if the supergroup chat is a forum with topics enabled (optional).
   * Only applicable to supergroup chats.
   */
  is_forum?: boolean
}
