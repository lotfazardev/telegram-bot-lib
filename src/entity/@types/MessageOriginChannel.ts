import { Chat } from './Chat'

/**
 * Represents a message originally sent to a channel chat.
 */
export interface MessageOriginChannel {
  /**
   * Type of the message origin, always `"channel"`.
   *
   * @example
   * 'channel'
   */
  type: 'channel'

  /**
   * The date when the message was originally sent, in Unix time.
   *
   * @example
   * 1691234567
   */
  date: number

  /**
   * The channel chat to which the message was originally sent.
   *
   * @see {@link Chat}
   *
   * @example
   * { id: -1009876543210, title: 'Announcements', type: 'channel' }
   */
  chat: Chat

  /**
   * A unique identifier for the message inside the chat.
   *
   * @example
   * 42
   */
  message_id: number

  /**
   * The signature of the original post author, if applicable.
   *
   * @example
   * 'John Doe'
   */
  author_signature?: string
}
