/**
 * Defines the criteria used to request suitable users for a keyboard button.
 *
 * Information about the selected users will be shared with the bot when the corresponding button is pressed.
 * This is available for use in private chats only.
 *
 * For more details, see [Requesting Users](https://core.telegram.org/bots/features#chat-and-user-selection).
 *
 * @example
 * const requestUsers: KeyboardButtonRequestUsers = {
 *   request_id: 123,
 *   user_is_bot: false,
 *   max_quantity: 3,
 *   request_name: true,
 *   request_username: true
 * };
 */
export interface KeyboardButtonRequestUsers {
  /**
   * Signed 32-bit identifier of the request.
   * This value will be received back in the {@link UsersShared} object when the corresponding button is pressed.
   * The `request_id` must be unique within the message.
   *
   * @example 123
   */
  request_id: number

  /**
   * Optional. Pass `true` to request bots, or `false` to request regular users.
   * If not specified, no additional restrictions are applied.
   *
   * @optional
   * @default undefined
   */
  user_is_bot?: boolean

  /**
   * Optional. Pass `true` to request premium users, or `false` to request non-premium users.
   * If not specified, no additional restrictions are applied.
   *
   * @optional
   * @default undefined
   */
  user_is_premium?: boolean

  /**
   * Optional. The maximum number of users to be selected; must be between 1 and 10. Defaults to 1.
   *
   * @optional
   * @default 1
   */
  max_quantity?: number

  /**
   * Optional. Pass `true` to request the users' first and last names.
   *
   * @optional
   * @default false
   */
  request_name?: boolean

  /**
   * Optional. Pass `true` to request the users' usernames.
   *
   * @optional
   * @default false
   */
  request_username?: boolean

  /**
   * Optional. Pass `true` to request the users' photos.
   *
   * @optional
   * @default false
   */
  request_photo?: boolean
}
