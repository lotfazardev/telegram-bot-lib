import { User } from './User'

/**
 * Represents a chat member that was banned in the chat and can't return to the chat or view chat messages.
 *
 */
export interface ChatMemberBanned {
  /**
   * The member's status in the chat. This is always `"kicked"`.
   */
  status: 'kicked'

  /**
   * Information about the user.
   *
   * @see {@link User} for the details of the user object.
   */
  user: User

  /**
   * Date when restrictions will be lifted for this user; Unix time. If 0, then the user is banned forever (in Unix time).
   * This field is optional.
   *
   * @example
   * // Unix timestamp for December 31, 2024, 00:00:00
   * const untilDate = 1703990400;
   */
  until_date: number
}
