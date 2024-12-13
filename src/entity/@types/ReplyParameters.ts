import { MessageEntity } from './MessageEntity'

export interface ReplyParameters {
  message_id: number
  chat_id?: number | string
  allow_sending_without_reply?: boolean
  quote?: string
  quote_parse_mode?: string
  quote_entities?: MessageEntity[]
  quote_position?: number
}
