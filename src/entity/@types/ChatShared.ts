import { PhotoSize } from './PhotoSize'

/**
 * Represents information about a chat that was shared with the bot using a [KeyboardButtonRequestChat](https://core.telegram.org/bots/api#keyboardbuttonrequestchat) button.
 *
 * This object is received when a user shares a chat with the bot. The information includes the request ID, the shared chat's ID, and optionally the title, username, and photo of the chat.
 *
 * @remarks
 * - The `chat_id` can be a large number (up to 52 significant bits), so it may need to be stored in a 64-bit integer or double-precision float type to avoid issues in certain programming languages.
 * - If the bot has not been granted access to the shared chat, it may be unable to use the `chat_id`.
 * - Fields such as `title`, `username`, and `photo` are optional and are included only if requested by the bot when setting up the `KeyboardButtonRequestChat` button.
 *
 * @example
 * ```typescript
 * const chatShared: ChatShared = {
 *   request_id: 123456789,
 *   chat_id: 987654321,
 *   title: "Example Group",
 *   username: "example_group",
 *   photo: [
 *     {
 *       file_id: "photo_file_id",
 *       width: 200,
 *       height: 200
 *     }
 *   ]
 * };
 * ```
 * This example demonstrates a shared chat with a request ID, chat ID, title, username, and a photo of the chat.
 *
 * @see [ChatShared Documentation](https://core.telegram.org/bots/api#chatshared)
 */
export interface ChatShared {
  /**
   * The unique identifier of the request.
   */
  request_id: number

  /**
   * The unique identifier of the shared chat. This number can be very large, and it's safe to store it as a 64-bit integer or double-precision float.
   *
   * @example
   * 987654321 // A large chat ID.
   */
  chat_id: number

  /**
   * Optional. The title of the shared chat, if it was requested by the bot.
   *
   * @example
   * "Example Group"
   */
  title?: string

  /**
   * Optional. The username of the shared chat, if it was requested by the bot and available.
   *
   * @example
   * "example_group"
   */
  username?: string

  /**
   * Optional. Available sizes of the chat photo, if the photo was requested by the bot.
   *
   * @see {@link PhotoSize}
   *
   * @example
   * [{ file_id: "photo_file_id", width: 200, height: 200 }]
   */
  photo?: PhotoSize[]
}
