import { User } from './User'

/**
 * Represents a message originally sent by a known user.
 *
 * @see {@link User}
 */
export interface MessageOriginUser {
  /**
   * Type of the message origin, always `"user"`.
   *
   */
  type: 'user'

  /**
   * The date when the message was originally sent, in Unix time.
   *
   * @example
   * 1691234567
   */
  date: number

  /**
   * The user who sent the message originally.
   *
   * -@see {@link User}
   */
  sender_user: User
}
