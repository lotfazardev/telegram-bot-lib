import { ForceReply } from '@entity/@types/ForceReply'
import { InlineKeyboardMarkup } from '@entity/@types/InlineKeyboardMarkup'
import { InputFile } from '@entity/@types/InputFile'
import { MessageEntity } from '@entity/@types/MessageEntity'
import { ReplyKeyboardMarkup } from '@entity/@types/ReplyKeyboardMarkup'
import { ReplyKeyboardRemove } from '@entity/@types/ReplyKeyboardRemove'
import { ReplyParameters } from '@entity/@types/ReplyParameters'

/**
 * Parameters for sending a photo message via Telegram API.
 */
export interface SendPhotoParams {
  /**
   * Unique identifier of the business connection on behalf of which the message will be sent.
   * Optional.
   */
  business_connection_id?: string

  /**
   * Unique identifier for the target chat or username of the target channel.
   * For channels, use the format `@channelusername`.
   * Required.
   */
  chat_id: number | string

  /**
   * Unique identifier for the target message thread (topic) of the forum.
   * Applicable only for forum supergroups.
   * Optional.
   */
  message_thread_id?: number

  /**
   * Photo to send. This can be:
   * - A `file_id` (string) of a photo existing on Telegram servers (recommended),
   * - An HTTP URL (string) for Telegram to fetch the photo,
   * - An `InputFile` object to upload a new photo.
   * The photo must be at most 10 MB, with a maximum width and height of 10000.
   * Required.
   */
  photo: string | InputFile

  /**
   * Caption for the photo, which may also be used when resending photos by `file_id`.
   * Maximum length: 1024 characters after entities parsing.
   * Optional.
   */
  caption?: string

  /**
   * Mode for parsing entities in the photo caption.
   * See Telegram formatting options for supported modes.
   * Optional.
   */
  parse_mode?: string

  /**
   * A JSON-serialized list of special entities that appear in the caption.
   * Can be used as an alternative to `parse_mode`.
   * Optional.
   */
  caption_entities?: MessageEntity[]

  /**
   * If set to `true`, displays the caption above the message media.
   * Optional.
   */
  show_caption_above_media?: boolean

  /**
   * If set to `true`, covers the photo with a spoiler animation.
   * Optional.
   */
  has_spoiler?: boolean

  /**
   * If set to `true`, sends the message silently.
   * Users will receive a notification with no sound.
   * Optional.
   */
  disable_notification?: boolean

  /**
   * If set to `true`, protects the contents of the sent message from forwarding and saving.
   * Optional.
   */
  protect_content?: boolean

  /**
   * If set to `true`, allows up to 1000 messages per second, bypassing
   * broadcasting limits for a fee (0.1 Telegram Stars per message).
   * The relevant Stars are withdrawn from the bot's balance.
   * Optional.
   */
  allow_paid_broadcast?: boolean

  /**
   * Unique identifier of the message effect to be added to the message.
   * Applicable only for private chats.
   * Optional.
   */
  message_effect_id?: string

  /**
   * Description of the message to reply to.
   * Optional.
   */
  reply_parameters?: ReplyParameters

  /**
   * Additional interface options, such as:
   * - Inline keyboard (`InlineKeyboardMarkup`),
   * - Custom reply keyboard (`ReplyKeyboardMarkup`),
   * - Removing a reply keyboard (`ReplyKeyboardRemove`),
   * - Forcing a reply (`ForceReply`).
   * Optional.
   */
  reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply
}
