import { User } from './User'

/**
 * Represents a chat member that has no additional privileges or restrictions.
 *
 */
export interface ChatMemberMember {
  /**
   * The member's status in the chat. This is always `"member"`.
   */
  status: 'member'

  /**
   * Information about the user.
   *
   * @see {@link User} for the details of the user object.
   */
  user: User

  /**
   * The date when the user's subscription will expire (in Unix time).
   * This field is optional.
   *
   * @example
   * // Unix timestamp for December 31, 2024, 00:00:00
   * const untilDate = 1703990400;
   */
  until_date?: number
}
