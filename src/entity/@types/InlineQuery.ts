import { User } from './User'
import { Location } from './Location'

/**
 * This object represents an incoming inline query.
 * When the user sends an empty query, the bot could return default or trending results.
 */
export interface InlineQuery {
  /**
   * Unique identifier for this query.
   */
  id: string

  /**
   * Sender of the query.
   */
  from: User

  /**
   * Text of the query (up to 256 characters).
   */
  query: string

  /**
   * Offset of the results to be returned, can be controlled by the bot.
   */
  offset: string

  /**
   * Optional. Type of the chat from which the inline query was sent.
   * Can be one of:
   * - "sender" for a private chat with the inline query sender
   * - "private"
   * - "group"
   * - "supergroup"
   * - "channel"
   *
   * The chat type should always be known for requests sent from official clients and most third-party clients,
   * unless the request was sent from a secret chat.
   */
  chat_type?: 'sender' | 'private' | 'group' | 'supergroup' | 'channel'

  /**
   * Optional. Sender location, only for bots that request user location.
   */
  location?: Location
}
