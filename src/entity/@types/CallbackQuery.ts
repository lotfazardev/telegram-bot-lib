import { MaybeInaccessibleMessage } from './MaybeInaccessibleMessage'
import { User } from './User'

/**
 * Represents an incoming callback query from a callback button in an [inline keyboard](https://core.telegram.org/bots/features#inline-keyboards).
 *
 *
 * @example
 * ```typescript
 * const callbackQuery: CallbackQuery = {
 *   id: "12345",
 *   from: {
 *     id: 1,
 *     first_name: "John",
 *     last_name: "Doe"
 *   },
 *   chat_instance: "abc123",
 *   data: "some_data"
 * };
 * ```
 */
export interface CallbackQuery {
  /**
   * Unique identifier for this query.
   */
  id: string

  /**
   * The user who sent the callback query.
   *
   * @see {@link User}
   */
  from: User

  /**
   * Optional. Message sent by the bot with the callback button that originated the query.
   *
   * @see {@link MaybeInaccessibleMessage}
   */
  message?: MaybeInaccessibleMessage

  /**
   * Optional. Identifier of the message sent via the bot in inline mode, that originated the query.
   */
  inline_message_id?: string

  /**
   * Global identifier, uniquely corresponding to the chat to which the message with the callback button was sent.
   * Useful for high scores in [games](#games).
   */
  chat_instance: string

  /**
   * Optional. Data associated with the callback button.
   *
   * Be aware that the message that originated the query may contain no callback buttons with this data.
   */
  data?: string

  /**
   * Optional. Short name of a [game](#games) to be returned, serves as the unique identifier for the game.
   */
  game_short_name?: string
}
