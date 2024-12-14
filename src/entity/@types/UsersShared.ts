import { SharedUser } from './SharedUser'

/**
 * Represents information about the users whose identifiers were shared with the bot using a [KeyboardButtonRequestUsers](https://core.telegram.org/bots/api#keyboardbuttonrequestusers) button.
 *
 * This object is received when a user shares their identifier (or multiple identifiers) with the bot through the `KeyboardButtonRequestUsers` button. It contains the request ID and a list of shared users.
 *
 * @remarks
 * - The `request_id` is a unique identifier for the request made by the bot to share user identifiers.
 * - The `users` field is an array containing information about the users that were shared with the bot. Each item in this array is a `SharedUser` object.
 *
 * @example
 * ```typescript
 * const usersShared: UsersShared = {
 *   request_id: 987654321,
 *   users: [
 *     {
 *       user_id: 123456789,
 *       first_name: "John",
 *       last_name: "Doe",
 *       username: "johndoe"
 *     },
 *     {
 *       user_id: 987654321,
 *       first_name: "Jane",
 *       last_name: "Doe",
 *       username: "janedoe"
 *     }
 *   ]
 * };
 * ```
 * This example demonstrates a scenario where the bot receives the shared identifiers of two users, along with their details.
 *
 * @see [UsersShared Documentation](https://core.telegram.org/bots/api#usersshared)
 */
export interface UsersShared {
  /**
   * The unique identifier of the request made by the bot for sharing user identifiers.
   *
   * @example
   * 987654321 // Request ID
   */
  request_id: number

  /**
   * An array containing information about the users whose identifiers were shared with the bot.
   *
   * Each entry in this array is a {@link SharedUser} object containing the user's ID and optional details.
   *
   * @example
   * [
   *   { user_id: 123456789, first_name: "John", username: "johndoe" },
   *   { user_id: 987654321, first_name: "Jane", username: "janedoe" }
   * ]
   */
  users: SharedUser[]
}
