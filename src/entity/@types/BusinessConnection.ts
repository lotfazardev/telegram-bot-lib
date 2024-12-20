import { User } from './User'

/**
 * Describes the connection between the bot and a business account.
 *
 * This object provides details about the bot's connection to a business account,
 * including the unique connection ID, the user who created the connection,
 * whether the bot can reply on behalf of the business account, and the connection's
 * status (enabled or not).
 *
 * @see {@link User} - Represents the business account user who created the business connection.
 */
export interface BusinessConnection {
  /**
   * Unique identifier for the business connection.
   *
   * This ID is used to uniquely identify the business connection between the bot
   * and the business account.
   */
  id: string

  /**
   * The business account user who created the business connection.
   *
   * This field refers to the user responsible for creating the business connection.
   *
   * @see {@link User} for detailed information about the user.
   */
  user: User

  /**
   * The identifier of the private chat with the user who created the business connection.
   *
   * This identifier represents the chat between the bot and the user who established
   * the business connection. It is a unique number that may exceed 32 significant bits.
   * It is safe to store this identifier as a 64-bit integer or double-precision float.
   */
  user_chat_id: number

  /**
   * The date when the connection was established, represented in Unix time (seconds).
   *
   * This timestamp indicates when the business connection was created.
   */
  date: number

  /**
   * Whether the bot can act on behalf of the business account in recent chats.
   *
   * This field is `true` if the bot can reply to or interact in chats that were active
   * within the last 24 hours, on behalf of the business account.
   */
  can_reply: boolean

  /**
   * Indicates whether the connection is currently active.
   *
   * This field is `true` if the connection is active, allowing the bot to interact
   * with the business account. If `false`, the connection is inactive.
   */
  is_enabled: boolean
}
