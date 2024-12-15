/**
 * This object describes the bot's menu button in a private chat.
 *
 * The menu button determines the user interface for a bot's menu in private chats.
 * If a custom menu button other than the default one is set, it is applied in the chat.
 * Otherwise, the default menu button is used, which typically opens the list of bot commands.
 *
 * This object can be one of the following types:
 * - {@link MenuButtonCommands}
 * - {@link MenuButtonWebApp}
 * - {@link MenuButtonDefault}
 */
export interface MenuButton {
  /**
   * The type of the menu button.
   *
   * This field determines the specific type of menu button for the private chat.
   * It can be one of the following:
   * - `MenuButtonCommands`
   * - `MenuButtonWebApp`
   * - `MenuButtonDefault`
   */
  type: 'commands' | 'web_app' | 'default'

  /**
   * The description or configuration details of the menu button.
   *
   * Depending on the type, this field will contain different configurations:
   * - For `MenuButtonCommands`, it may link to the list of bot commands.
   * - For `MenuButtonWebApp`, it may contain a URL to a web app.
   * - For `MenuButtonDefault`, it will be undefined.
   */
  payload?: string // Payload is optional and can vary based on button type.
}
