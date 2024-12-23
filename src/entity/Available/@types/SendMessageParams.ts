import { ForceReply } from '../../@types/ForceReply'
import { InlineKeyboardMarkup } from '../../@types/InlineKeyboardMarkup'
import { LinkPreviewOptions } from '../../@types/LinkPreviewOptions'
import { MessageEntity } from '../../@types/MessageEntity'
import { ReplyKeyboardMarkup } from '../../@types/ReplyKeyboardMarkup'
import { ReplyKeyboardRemove } from '../../@types/ReplyKeyboardRemove'
import { ReplyParameters } from '../../@types/ReplyParameters'

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
  allow_paid_broadcast?: boolean
  message_effect_id?: string
  reply_parameters?: ReplyParameters
  reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply
}
