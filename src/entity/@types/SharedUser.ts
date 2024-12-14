import { PhotoSize } from './PhotoSize'

/**
 * Represents information about a user that was shared with the bot using a [KeyboardButtonRequestUsers](https://core.telegram.org/bots/api#keyboardbuttonrequestusers) button.
 *
 * This object is received when a user shares their information with the bot via the `KeyboardButtonRequestUsers` button. It includes the user's ID, and optionally their first name, last name, username, and profile photo.
 *
 * @remarks
 * - The `user_id` is a unique identifier for the shared user. It can be a large number, so it’s recommended to store it as a 64-bit integer or a double-precision float to handle the number of up to 52 significant bits.
 * - The optional fields `first_name`, `last_name`, `username`, and `photo` will only be available if the bot requested them using the `KeyboardButtonRequestUsers` button.
 * - If the bot does not have access to the shared user, it might be unable to use the `user_id`.
 *
 * @example
 * ```typescript
 * const sharedUser: SharedUser = {
 *   user_id: 123456789,
 *   first_name: "John",
 *   last_name: "Doe",
 *   username: "johndoe",
 *   photo: [
 *     { file_id: "photo_file_id", width: 100, height: 100 }
 *   ]
 * };
 * ```
 * In this example, the bot receives the shared user's ID, name, username, and profile photo.
 *
 * @see [SharedUser Documentation](https://core.telegram.org/bots/api#shareduser)
 */
export interface SharedUser {
  /**
   * The unique identifier of the shared user.
   *
   * @remarks
   * This identifier may be a large number, so it's safe to store it as a 64-bit integer or double-precision float.
   *
   * @example
   * 123456789 // User's ID.
   */
  user_id: number

  /**
   * Optional. The first name of the shared user, if it was requested by the bot.
   *
   * @example
   * "John"
   */
  first_name?: string

  /**
   * Optional. The last name of the shared user, if it was requested by the bot.
   *
   * @example
   * "Doe"
   */
  last_name?: string

  /**
   * Optional. The username of the shared user, if it was requested by the bot.
   *
   * @example
   * "johndoe"
   */
  username?: string

  /**
   * Optional. Available sizes of the user's profile photo, if the photo was requested by the bot.
   *
   * @see {@link PhotoSize}
   *
   * @example
   * [{ file_id: "photo_file_id", width: 100, height: 100 }]
   */
  photo?: PhotoSize[]
}
