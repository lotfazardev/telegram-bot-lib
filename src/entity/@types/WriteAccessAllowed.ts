/**
 * Represents a service message about a user allowing a bot to write messages after adding it to the attachment menu,
 * launching a Web App from a link, or accepting an explicit request from a Web App sent by the method
 * [requestWriteAccess](https://core.telegram.org/bots/webapps#initializing-mini-apps).
 *
 * This object is received when a user grants permission to the bot to send messages through specific actions like
 * adding the bot to the attachment menu, launching a Web App, or accepting a request for access to write messages
 * sent by the Web App.
 *
 * @remarks
 * - The `from_request` field indicates if the access was granted after the user accepted an explicit request from a Web App
 *   initiated via the [requestWriteAccess](https://core.telegram.org/bots/webapps#initializing-mini-apps) method.
 * - The `web_app_name` field is provided if the access was granted when a Web App was launched from a link.
 * - The `from_attachment_menu` field indicates if the access was granted when the bot was added to the attachment or side menu.
 *
 * @example
 * ```typescript
 * const writeAccess: WriteAccessAllowed = {
 *   from_request: true,
 *   web_app_name: "Example Web App",
 *   from_attachment_menu: false
 * };
 * ```
 * This example demonstrates a scenario where the bot was granted write access after the user accepted an explicit request
 * from a Web App, and the access was granted via a Web App launch.
 *
 * @see [WriteAccessAllowed Documentation](https://core.telegram.org/bots/webapps#writeaccessallowed)
 */
export interface WriteAccessAllowed {
  /**
   * Optional. Indicates if the access was granted after the user accepted an explicit request from a Web App.
   *
   * @remarks
   * This is only applicable when the access is granted via the [requestWriteAccess](https://core.telegram.org/bots/webapps#initializing-mini-apps) method.
   *
   * @example
   * true // Access granted from explicit request.
   */
  from_request?: boolean

  /**
   * Optional. The name of the Web App, if the access was granted when the Web App was launched from a link.
   *
   * @example
   * "Example Web App"
   */
  web_app_name?: string

  /**
   * Optional. Indicates if the access was granted when the bot was added to the attachment or side menu.
   *
   * @example
   * true // Access granted after adding the bot to the attachment menu.
   */
  from_attachment_menu?: boolean
}
