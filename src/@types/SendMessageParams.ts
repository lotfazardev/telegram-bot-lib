import { ForceReply } from './ForceReply'
import { InlineKeyboardMarkup } from './InlineKeyboardMarkup'
import { LinkPreviewOptions } from './LinkPreviewOptions'
import { MessageEntity } from './MessageEntity'
import { ReplyKeyboardMarkup } from './ReplyKeyboardMarkup'
import { ReplyKeyboardRemove } from './ReplyKeyboardRemove'
import { ReplyParameters } from './ReplyParameters'

export interface SendMessageParams {
  business_connection_id?: string
  chat_id: number | string
  message_thread_id?: number
  text: string
  parse_mode?: string
  entities?: MessageEntity[]
  link_preview_options?: LinkPreviewOptions
  disable_notification?: boolean
  protect_content?: boolean
  reply_parameters?: ReplyParameters
  reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply
}
