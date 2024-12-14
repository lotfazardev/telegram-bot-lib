import { KeyboardButtonPollType } from './KeyboardButtonPollType'
import { KeyboardButtonRequestChat } from './KeyboardButtonRequestChat'
import { KeyboardButtonRequestUsers } from './KeyboardButtonRequestUsers'
import { WebAppInfo } from './WebAppInfo'

/**
 * Represents one button of the reply keyboard.
 *
 * At most one of the optional fields must be used to specify the type of the button.
 * For simple text buttons, a string can be used instead of this object to specify the button text.
 *
 * @example
 * const button: KeyboardButton = {
 *   text: 'Send my contact',
 *   request_contact: true
 * };
 */
export interface KeyboardButton {
  /**
   * Text of the button.
   *
   * If none of the optional fields are used, the button text will be sent as a message when the button is pressed.
   *
   * @example 'Send my contact'
   */
  text: string

  /**
   * Optional. If specified, pressing the button will open a list of suitable users.
   * The identifiers of selected users will be sent to the bot in a “users_shared” service message.
   * Available in private chats only.
   *
   * @optional
   * @see {@link KeyboardButtonRequestUsers} for more details.
   */
  request_users?: KeyboardButtonRequestUsers

  /**
   * Optional. If specified, pressing the button will open a list of suitable chats.
   * Tapping on a chat will send its identifier to the bot in a “chat_shared” service message.
   * Available in private chats only.
   *
   * @optional
   * @see {@link KeyboardButtonRequestChat} for more details.
   */
  request_chat?: KeyboardButtonRequestChat

  /**
   * Optional. If `true`, the user's phone number will be sent as a contact when the button is pressed.
   * Available in private chats only.
   *
   * @optional
   * @default false
   */
  request_contact?: boolean

  /**
   * Optional. If `true`, the user's current location will be sent when the button is pressed.
   * Available in private chats only.
   *
   * @optional
   * @default false
   */
  request_location?: boolean

  /**
   * Optional. If specified, the user will be asked to create a poll and send it to the bot when the button is pressed.
   * Available in private chats only.
   *
   * @optional
   * @see {@link KeyboardButtonPollType} for more details.
   */
  request_poll?: KeyboardButtonPollType

  /**
   * Optional. If specified, the described {@link WebAppInfo} will be launched when the button is pressed.
   * The Web App will be able to send a “web_app_data” service message.
   * Available in private chats only.
   *
   * @optional
   * @see {@link WebAppInfo} for more details.
   */
  web_app?: WebAppInfo
}
