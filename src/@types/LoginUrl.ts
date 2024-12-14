/**
 * Represents a parameter of the inline keyboard button used to automatically authorize a user.
 * This object serves as a replacement for the [Telegram Login Widget](https://core.telegram.org/widgets/login) when the user is coming from Telegram.
 * All the user needs to do is tap/click a button and confirm that they want to log in.
 *
 * Telegram apps support these buttons as of [version 5.7](https://telegram.org/blog/privacy-discussions-web-bots#meet-seamless-web-bots).
 *
 * @example
 * const loginUrlButton: InlineKeyboardButton = {
 *   text: "Log in",
 *   login_url: {
 *     url: "https://example.com/auth",
 *     forward_text: "Log in to your account"
 *   }
 * };
 */
export interface LoginUrl {
  /**
   * An HTTPS URL to be opened with user authorization data added to the query string when the button is pressed.
   * If the user refuses to provide authorization data, the original URL without information about the user will be opened.
   * The data added is the same as described in [Receiving authorization data](https://core.telegram.org/widgets/login#receiving-authorization-data).
   *
   * **NOTE:** You **must** always check the hash of the received data to verify the authentication and the integrity of the data
   * as described in [Checking authorization](https://core.telegram.org/widgets/login#checking-authorization).
   *
   * @example "https://example.com/auth"
   */
  url: string

  /**
   * (Optional) New text of the button in forwarded messages.
   *
   * @example "Click to log in to your account."
   */
  forward_text?: string

  /**
   * (Optional) Username of a bot, which will be used for user authorization.
   * See [Setting up a bot](https://core.telegram.org/widgets/login#setting-up-a-bot) for more details.
   * If not specified, the current bot's username will be assumed. The `url`'s domain must be the same as the domain linked with the bot.
   * See [Linking your domain to the bot](https://core.telegram.org/widgets/login#linking-your-domain-to-the-bot) for more details.
   *
   * @example "my_auth_bot"
   */
  bot_username?: string

  /**
   * (Optional) Pass `True` to request the permission for your bot to send messages to the user.
   *
   * @example true
   */
  request_write_access?: boolean
}
