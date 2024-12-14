/**
 * Describes data sent from a {@link https://core.telegram.org/bots/webapps | Web App} to the bot.
 */
export interface WebAppData {
  /**
   * The data sent from the Web App.
   * Be aware that a bad client can send arbitrary data in this field.
   * - {@link String} - The raw data string.
   */
  data: string

  /**
   * Text of the {@link https://core.telegram.org/bots/webapps#keyboard-buttons | web_app} keyboard button
   * from which the Web App was opened.
   * Be aware that a bad client can send arbitrary data in this field.
   * - {@link String} - The text of the button used to open the Web App.
   */
  button_text?: string
}
