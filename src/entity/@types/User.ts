/**
 * This interface represents a Telegram user or bot.
 */
export interface User {
  /**
   * Unique identifier for this user or bot.
   * This number may have more than 32 significant bits, so use a 64-bit integer or double-precision float to safely store it.
   */
  id: number

  /**
   * Indicates if this user is a bot.
   */
  is_bot: boolean

  /**
   * User's or bot's first name.
   */
  first_name: string

  /**
   * User's or bot's last name (optional).
   */
  last_name?: string

  /**
   * User's or bot's username (optional).
   */
  username?: string

  /**
   * IETF language tag of the user's language (optional).
   * For more information, see [IETF language tag](https://en.wikipedia.org/wiki/IETF_language_tag).
   */
  language_code?: string

  /**
   * Indicates if the user is a Telegram Premium user (optional).
   */
  is_premium?: boolean

  /**
   * Indicates if this user added the bot to the attachment menu (optional).
   */
  added_to_attachment_menu?: boolean

  /**
   * Indicates if the bot can be invited to groups (optional).
   * Returned only in the `getMe` method.
   */
  can_join_groups?: boolean

  /**
   * Indicates if privacy mode is disabled for the bot (optional).
   * Returned only in the `getMe` method.
   */
  can_read_all_group_messages?: boolean

  /**
   * Indicates if the bot supports inline queries (optional).
   * Returned only in the `getMe` method.
   */
  supports_inline_queries?: boolean

  /**
   * Indicates if the bot can be connected to a Telegram Business account to receive its messages (optional).
   * Returned only in the `getMe` method.
   */
  can_connect_to_business?: boolean

  /**
   * Indicates if the bot has a main Web App (optional).
   * Returned only in the `getMe` method.
   */
  has_main_web_app?: boolean
}
