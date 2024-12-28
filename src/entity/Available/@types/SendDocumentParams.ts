import { InputFile } from '@entity/@types/InputFile'
import { ForceReply } from '../../@types/ForceReply'
import { InlineKeyboardMarkup } from '../../@types/InlineKeyboardMarkup'
import { MessageEntity } from '../../@types/MessageEntity'
import { ReplyKeyboardMarkup } from '../../@types/ReplyKeyboardMarkup'
import { ReplyKeyboardRemove } from '../../@types/ReplyKeyboardRemove'
import { ReplyParameters } from '../../@types/ReplyParameters'

export interface SendDocumentParams {
  /**
   * Unique identifier of the business connection on behalf of which the message will be sent.
   * Optional field.
   */
  business_connection_id?: string

  /**
   * Unique identifier for the target chat or username of the target channel.
   * Can be an integer or a string (e.g., "@channelusername").
   * This is a required field.
   */
  chat_id: string | number

  /**
   * Unique identifier for the target message thread (topic) of the forum.
   * This is used for forum supergroups only.
   * Optional field.
   */
  message_thread_id?: number

  /**
   * Document file to send.
   * Can be a file_id as a string, an HTTP URL, or a new file uploaded using multipart/form-data.
   * This is a required field.
   */
  document: string | InputFile

  /**
   * Caption for the document, 0-1024 characters after entities parsing.
   * Optional field.
   */
  caption?: string

  /**
   * Mode for parsing entities in the document caption.
   * Optional field.
   */
  parse_mode?: string

  /**
   * A JSON-serialized list of special entities that appear in the caption.
   * Can be specified instead of parse_mode.
   * Optional field.
   */
  caption_entities?: MessageEntity[]

  /**
   * Thumbnail of the document sent.
   * Can be a file_id, an HTTP URL, or a new file uploaded using multipart/form-data.
   * Optional field.
   */
  thumbnail?: string | InputFile

  /**
   * If true, sends the message silently without a notification sound.
   * Optional field.
   */
  disable_notification?: boolean

  /**
   * If true, protects the contents of the message from forwarding and saving.
   * Optional field.
   */
  protect_content?: boolean

  /**
   * Pass true to allow up to 1000 messages per second for a fee.
   * Optional field.
   */
  allow_paid_broadcast?: boolean

  /**
   * Unique identifier of the message effect to be added to the message.
   * This is for private chats only.
   * Optional field.
   */
  message_effect_id?: string

  /**
   * Description of the message to reply to.
   * Optional field.
   */
  reply_parameters?: ReplyParameters

  /**
   * Additional interface options for inline keyboards, custom reply keyboards, or force replies.
   * Optional field.
   */
  reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply
}
