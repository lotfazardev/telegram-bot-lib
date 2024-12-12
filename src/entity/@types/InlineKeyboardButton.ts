import { CallbackGame } from './CallbackGame'
import { LoginUrl } from './LoginUrl'
import { SwitchInlineQueryChosenChat } from './SwitchInlineQueryChosenChat'
import { WebAppInfo } from './WebAppInfo'

export interface InlineKeyboardButton {
  text: string
  url?: string
  callback_data?: string
  web_app?: WebAppInfo
  login_url?: LoginUrl
  switch_inline_query?: string
  switch_inline_query_current_chat?: string
  switch_inline_query_chosen_chat?: SwitchInlineQueryChosenChat
  callback_game?: CallbackGame
  pay?: boolean
}
