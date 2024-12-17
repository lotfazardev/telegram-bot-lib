import { MessageEntity } from './MessageEntity'
import { InlineKeyboardMarkup } from './InlineKeyboardMarkup'
import { InputMessageContent } from './InputMessageContent'

/**
 * Represents a link to a photo. By default, the photo will be sent by the user with an optional caption.
 * Alternatively, input_message_content can be used to send a message with the specified content instead of the photo.
 */
export interface InlineQueryResultPhoto {
  /**
   * Type of the result, must be "photo".
   */
  type: 'photo'

  /**
   * Unique identifier for this result, 1-64 bytes.
   */
  id: string

  /**
   * A valid URL of the photo. The photo must be in JPEG format and not exceed 5MB.
   */
  photo_url: string

  /**
   * URL of the thumbnail for the photo.
   */
  thumbnail_url: string

  /**
   * Optional. Width of the photo.
   */
  photo_width?: number

  /**
   * Optional. Height of the photo.
   */
  photo_height?: number

  /**
   * Optional. Title for the result.
   */
  title?: string

  /**
   * Optional. Short description of the result.
   */
  description?: string

  /**
   * Optional. Caption of the photo to be sent, 0-1024 characters after entities parsing.
   */
  caption?: string

  /**
   * Optional. Mode for parsing entities in the photo caption.
   */
  parse_mode?: string

  /**
   * Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode.
   */
  caption_entities?: MessageEntity[]

  /**
   * Optional. Pass true if the caption must be shown above the message media.
   */
  show_caption_above_media?: boolean

  /**
   * Optional. Inline keyboard attached to the message.
   */
  reply_markup?: InlineKeyboardMarkup

  /**
   * Optional. Content of the message to be sent instead of the photo.
   */
  input_message_content?: InputMessageContent
}
