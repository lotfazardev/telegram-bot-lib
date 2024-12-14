import { CallbackGame } from './CallbackGame'
import { LoginUrl } from './LoginUrl'
import { SwitchInlineQueryChosenChat } from './SwitchInlineQueryChosenChat'
import { WebAppInfo } from './WebAppInfo'

/**
 * Represents one button of an inline keyboard.
 *
 * Exactly one of the optional fields must be used to specify the type of the button.
 * Each button can perform different actions when pressed, such as opening a URL, sending callback data,
 * launching a web app, or other Telegram-specific actions.
 *
 * @example
 * const inlineButton: InlineKeyboardButton = {
 *   text: "Click Me",
 *   callback_data: "action_1"
 * };
 */
export interface InlineKeyboardButton {
  /**
   * The label text on the button.
   *
   * @example "Click Me"
   */
  text: string

  /**
   * (Optional) HTTP or tg:// URL to be opened when the button is pressed.
   * Links like `tg://user?id=<user_id>` can mention a user by their identifier, if allowed by privacy settings.
   *
   * @example "https://www.example.com"
   */
  url?: string

  /**
   * (Optional) Data to be sent in a callback query to the bot when the button is pressed (1-64 bytes).
   * The bot can handle the callback query to trigger specific actions based on this data.
   *
   * @example "action_1"
   */
  callback_data?: string

  /**
   * (Optional) Description of a Web App that will be launched when the button is pressed.
   * Only available in private chats, not supported for messages sent on behalf of a Telegram Business account.
   *
   * @see {@link WebAppInfo}
   */
  web_app?: WebAppInfo

  /**
   * (Optional) An HTTPS URL used to automatically authorize the user.
   * Can be used as a replacement for the Telegram Login Widget.
   *
   * @see {@link LoginUrl}
   * @example "https://example.com/auth"
   */
  login_url?: LoginUrl

  /**
   * (Optional) If set, pressing the button will prompt the user to select one of their chats,
   * open that chat, and insert the bot's username and the specified inline query in the input field.
   *
   * @example "bot_query"
   */
  switch_inline_query?: string

  /**
   * (Optional) If set, pressing the button will insert the bot's username and the specified inline query
   * in the current chat's input field.
   *
   * @example "bot_query"
   */
  switch_inline_query_current_chat?: string

  /**
   * (Optional) If set, pressing the button will prompt the user to select one of their chats
   * of the specified type, open that chat, and insert the bot's username and the specified inline query
   * in the input field.
   *
   * @see {@link SwitchInlineQueryChosenChat}
   */
  switch_inline_query_chosen_chat?: SwitchInlineQueryChosenChat

  /**
   * (Optional) Description of the game that will be launched when the user presses the button.
   * This type of button must always be the first button in the first row.
   *
   * @see {@link CallbackGame}
   */
  callback_game?: CallbackGame

  /**
   * (Optional) If set to `True`, this button will be a payment button that sends a "Pay" button
   * in invoice messages.
   * This button must always be the first button in the first row.
   *
   * @example "Pay Now"
   */
  pay?: boolean
}
