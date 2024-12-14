/**
 * Represents a Web App with an HTTPS URL and additional initialization data.
 *
 * The `url` field is used to specify the URL of the Web App that should be opened.
 * Additional data for initializing the Web App can be provided as described in
 * [Initializing Web Apps](https://core.telegram.org/bots/webapps#initializing-mini-apps).
 *
 * @example
 * const webAppInfo: WebAppInfo = {
 *   url: 'https://example.com/webapp'
 * };
 */
export interface WebAppInfo {
  /**
   * An HTTPS URL of the Web App to be opened.
   *
   * This URL will be used to open the Web App and can include additional data
   * as specified in the [Initializing Web Apps](https://core.telegram.org/bots/webapps#initializing-mini-apps).
   *
   * @example 'https://example.com/webapp'
   */
  url: string
}
