import { Chat } from './Chat'

/**
 * Represents a message originally sent on behalf of a chat to a group chat.
 */
export interface MessageOriginChat {
  /**
   * Type of the message origin, always `"chat"`.
   *
   * @example
   * 'chat'
   */
  type: 'chat'

  /**
   * The date when the message was originally sent, in Unix time.
   *
   * @example
   * 1691234567
   */
  date: number

  /**
   * The chat that sent the message originally.
   *
   * -@see {@link Chat}
   * @example
   * { id: -1001234567890, title: 'My Group Chat', type: 'supergroup' }
   */
  sender_chat: Chat

  /**
   * The signature of the message author, if the message was originally sent by an anonymous chat administrator.
   *
   * @example
   * 'Anonymous Admin'
   */
  author_signature?: string
}
