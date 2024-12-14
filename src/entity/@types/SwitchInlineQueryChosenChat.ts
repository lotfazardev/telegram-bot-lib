/**
 * Represents an inline button that switches the current user to inline mode in a chosen chat.
 * The button allows the user to select a chat and, optionally, insert a default inline query into the input field.
 *
 * The button may also restrict the types of chats that can be chosen (e.g., private chats, group chats, channels).
 *
 * @example
 * const switchInlineButton: InlineKeyboardButton = {
 *   text: "Search in a chat",
 *   switch_inline_query_chosen_chat: {
 *     query: "example query",
 *     allow_group_chats: true,
 *     allow_channel_chats: true
 *   }
 * };
 */
export interface SwitchInlineQueryChosenChat {
  /**
   * (Optional) The default inline query to be inserted in the input field when switching to inline mode.
   * If left empty, only the bot's username will be inserted.
   *
   * @example "search for cat images"
   */
  query?: string

  /**
   * (Optional) Pass `True` to allow the user to choose private chats with users.
   *
   * @example true
   */
  allow_user_chats?: boolean

  /**
   * (Optional) Pass `True` to allow the user to choose private chats with bots.
   *
   * @example true
   */
  allow_bot_chats?: boolean

  /**
   * (Optional) Pass `True` to allow the user to choose group and supergroup chats.
   *
   * @example true
   */
  allow_group_chats?: boolean

  /**
   * (Optional) Pass `True` to allow the user to choose channel chats.
   *
   * @example true
   */
  allow_channel_chats?: boolean
}
