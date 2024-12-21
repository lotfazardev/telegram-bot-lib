import { WebAppInfo } from './WebAppInfo'

/**
 * Represents a menu button that launches a Web App when clicked.
 * This button opens a Web App for the user to interact with.
 */
export interface MenuButtonWebApp {
  /**
   * Type of the button, must be "web_app".
   */
  type: 'web_app'

  /**
   * Text displayed on the button.
   */
  text: string

  /**
   * Description of the Web App that will be launched when the user presses the button.
   * The Web App will be able to send an arbitrary message on behalf of the user.
   * Alternatively, a t.me link to a Web App can be specified, and the Web App will open when the user presses the link.
   * - {@link WebAppInfo}
   */
  web_app: WebAppInfo
}
