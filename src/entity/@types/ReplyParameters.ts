import { MessageEntity } from './MessageEntity'

/**
 * Represents parameters for replying to a message in a chat.
 * This object is used when sending a message that replies to a specific message.
 */
export interface ReplyParameters {
  /**
   * Unique identifier of the message that will be replied to in the current chat or chat specified by `chat_id`.
   * - {@link Message} - The original message that is being replied to.
   */
  message_id: number

  /**
   * Optional. If the message to be replied to is in a different chat, this is the unique identifier for the chat
   * or username of the channel (in the format `@channelusername`).
   * - {@link Chat} - Represents the chat to which the message belongs. Not supported for messages sent on behalf of a business account.
   */
  chat_id?: number | string

  /**
   * Optional. Pass `True` if the message should be sent even if the message to be replied to is not found.
   * - {@link Boolean} - Whether sending without a reply is allowed. Always `True` for messages sent on behalf of a business account.
   */
  allow_sending_without_reply?: boolean

  /**
   * Optional. The quoted part of the message to be replied to (up to 1024 characters after entities parsing).
   * - {@link String} - Quoted text that should match a part of the original message.
   */
  quote?: string

  /**
   * Optional. Mode for parsing entities in the quoted text.
   * - {@link String} - Formatting options for the quoted text (e.g., bold, italic).
   * See {@link https://core.telegram.org/bots/api#formatting-options} for more details.
   */
  quote_parse_mode?: string

  /**
   * Optional. A list of special entities that appear in the quoted part of the message.
   * - {@link MessageEntity} - Represents the special formatting for quoted text.
   * This can be specified instead of `quote_parse_mode`.
   */
  quote_entities?: MessageEntity[]

  /**
   * Optional. Position of the quoted text in the original message (in UTF-16 code units).
   * - {@link Number} - The exact position of the quote in the original message.
   */
  quote_position?: number
}
