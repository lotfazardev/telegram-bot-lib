import { InputFile } from '@entity/@types/InputFile'
import { ForceReply } from '../../@types/ForceReply'
import { InlineKeyboardMarkup } from '../../@types/InlineKeyboardMarkup'
import { MessageEntity } from '../../@types/MessageEntity'
import { ReplyKeyboardMarkup } from '../../@types/ReplyKeyboardMarkup'
import { ReplyKeyboardRemove } from '../../@types/ReplyKeyboardRemove'
import { ReplyParameters } from '../../@types/ReplyParameters'

/**
 * Parameters for sending a video via the Telegram Bot API.
 */
export interface SendVideoParams {
  /**
   * Unique identifier for the business connection on behalf of which the message will be sent.
   * This is optional and can be omitted if not needed.
   */
  business_connection_id?: string

  /**
   * Unique identifier for the target chat or username of the target channel.
   * The value can be either a chat ID (as a number) or a channel username (as a string in the format '@channelusername').
   * This parameter is required.
   */
  chat_id: string | number

  /**
   * Unique identifier for the target message thread (topic) in forum supergroups.
   * This is optional and should only be used for forum supergroups.
   */
  message_thread_id?: number

  /**
   * The video file to send.
   * It can either be:
   * - A file_id (string), referencing an existing video file on Telegram servers.
   * - An HTTP URL (string) to a video file on the internet.
   * - A new video file, provided via multipart/form-data (InputFile).
   * This parameter is required.
   */
  video: InputFile | string

  /**
   * Duration of the sent video in seconds.
   * This is optional and can be omitted if the duration is not specified.
   */
  duration?: number

  /**
   * Width of the video.
   * This is optional and can be omitted if the width is not specified.
   */
  width?: number

  /**
   * Height of the video.
   * This is optional and can be omitted if the height is not specified.
   */
  height?: number

  /**
   * A thumbnail for the video.
   * Can either be:
   * - An InputFile (video file object).
   * - A string URL.
   * Thumbnails are optional, but if provided, should be in JPEG format and less than 200 kB.
   */
  thumbnail?: InputFile | string

  /**
   * The caption of the video, up to 1024 characters.
   * This is optional and can be omitted if no caption is needed.
   */
  caption?: string

  /**
   * The mode for parsing entities in the caption (e.g., Markdown or HTML).
   * This is optional and can be omitted if the caption doesn't need entity parsing.
   */
  parse_mode?: string

  /**
   * A list of special entities that appear in the caption, which can be specified instead of `parse_mode`.
   * This is optional and can be omitted.
   */
  caption_entities?: Array<MessageEntity>

  /**
   * Whether the caption should be shown above the video.
   * This is optional and defaults to false.
   */
  show_caption_above_media?: boolean

  /**
   * Whether the video should be covered with a spoiler animation.
   * This is optional and defaults to false.
   */
  has_spoiler?: boolean

  /**
   * Whether the video is suitable for streaming.
   * This is optional and can be omitted if streaming is not required.
   */
  supports_streaming?: boolean

  /**
   * Whether to send the message silently (without sound notification).
   * This is optional and defaults to false.
   */
  disable_notification?: boolean

  /**
   * Whether to protect the content of the sent video from forwarding or saving.
   * This is optional and defaults to false.
   */
  protect_content?: boolean

  /**
   * Whether to allow up to 1000 messages per second to be sent, bypassing broadcast limits, for a fee.
   * This is optional and defaults to false.
   */
  allow_paid_broadcast?: boolean

  /**
   * Unique identifier for the message effect to be added to the video message.
   * This is optional and should be used for private chats only.
   */
  message_effect_id?: string

  /**
   * Description of the message to reply to.
   * This is optional and should contain the relevant message parameters if the video is a reply.
   */
  reply_parameters?: ReplyParameters

  /**
   * Additional interface options for replying to a message, such as custom inline keyboards or reply buttons.
   * This is optional and can be omitted if no interface options are needed.
   */
  reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply
}
