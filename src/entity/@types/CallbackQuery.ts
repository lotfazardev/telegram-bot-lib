import { MaybeInaccessibleMessage } from './MaybeInaccessibleMessage'
import { User } from './User'

export interface CallbackQuery {
  id: string
  from: User
  message?: MaybeInaccessibleMessage
  inline_message_id?: string
  chat_instance: string
  data?: string
  game_short_name?: string
}
