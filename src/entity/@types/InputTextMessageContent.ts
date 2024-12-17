import { MessageEntity } from './MessageEntity'
import { LinkPreviewOptions } from './LinkPreviewOptions'

/**
 * Represents the content of a text message to be sent as the result of an inline query.
 */
export interface InputTextMessageContent {
  /**
   * Text of the message to be sent, 1-4096 characters.
   */
  message_text: string

  /**
   * Optional. Mode for parsing entities in the message text.
   * See formatting options for more details.
   */
  parse_mode?: string

  /**
   * Optional. List of special entities that appear in the message text,
   * which can be specified instead of `parse_mode`.
   */
  entities?: MessageEntity[]

  /**
   * Optional. Link preview generation options for the message.
   */
  link_preview_options?: LinkPreviewOptions
}
