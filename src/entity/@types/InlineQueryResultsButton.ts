import { WebAppInfo } from './WebAppInfo'

/**
 * Represents a button displayed above inline query results.
 * You must use exactly one of the optional fields.
 */
export type InlineQueryResultsButton = {
  /**
   * Label text displayed on the button.
   */
  text: string

  /**
   * Optional. Description of the Web App to be launched when the button is pressed.
   * The Web App can switch back to inline mode using the `switchInlineQuery` method.
   */
  web_app?: WebAppInfo

  /**
   * Optional. Deep-linking parameter sent to the bot via the /start message when the button is pressed.
   * Must be 1-64 characters long, containing only `A-Z`, `a-z`, `0-9`, `_`, and `-`.
   */
  start_parameter?: string
}
