import { KeyboardButtonPollType } from './KeyboardButtonPollType'
import { KeyboardButtonRequestChat } from './KeyboardButtonRequestChat'
import { KeyboardButtonRequestUsers } from './KeyboardButtonRequestUsers'
import { WebAppInfo } from './WebAppInfo'

export interface KeyboardButton {
  text: string
  request_users?: KeyboardButtonRequestUsers
  request_chat?: KeyboardButtonRequestChat
  request_contact?: boolean
  request_location?: boolean
  request_poll?: KeyboardButtonPollType
  web_app?: WebAppInfo
}
