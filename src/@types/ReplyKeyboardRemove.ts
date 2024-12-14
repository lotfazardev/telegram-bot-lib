/**
 * Represents a request to remove the custom keyboard and display the default letter-keyboard in Telegram clients.
 *
 * By default, custom keyboards remain visible until a new keyboard is sent. This object allows the bot to remove
 * the current custom keyboard, returning the client to the default letter-keyboard.
 * One-time keyboards are automatically hidden after a button press.
 *
 * This is not supported in channels and for messages sent on behalf of a Telegram Business account.
 *
 * @example
 * const removeKeyboard: ReplyKeyboardRemove = {
 *   remove_keyboard: true,
 *   selective: true
 * };
 */
export interface ReplyKeyboardRemove {
  /**
   * Requests Telegram clients to remove the custom keyboard.
   * The user will no longer be able to summon this keyboard.
   * If you wish to hide the keyboard but keep it accessible, use the `one_time_keyboard` option in {@link ReplyKeyboardMarkup}.
   *
   * @example true
   */
  remove_keyboard: true

  /**
   * Optional. Use this parameter if you want to remove the keyboard for specific users only.
   *
   * Targets:
   * 1. Users mentioned in the text of the {@link Message} object.
   * 2. The sender of the original message in case of a reply in the same chat or forum topic.
   *
   * @example
   * // Removes the keyboard for users who voted in the poll but keeps it for others.
   * selective: true
   */
  selective?: boolean
}
