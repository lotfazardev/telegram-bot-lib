import { ChatAdministratorRights } from './ChatAdministratorRights'

export interface KeyboardButtonRequestChat {
  request_id: number
  chat_is_channel: boolean
  chat_is_forum?: boolean
  chat_has_username?: boolean
  chat_is_created?: boolean
  user_administrator_rights?: ChatAdministratorRights
  bot_administrator_rights?: ChatAdministratorRights
  bot_is_member?: boolean
  request_title?: boolean
  request_username?: boolean
  request_photo?: boolean
}
