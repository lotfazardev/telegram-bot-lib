import { User } from './User'

/**
 * Represents a chat member that isn't currently a member of the chat, but may join it themselves.
 *
 */
export interface ChatMemberLeft {
  /**
   * The member's status in the chat. This is always `"left"`.
   */
  status: 'left'

  /**
   * Information about the user.
   *
   * @see {@link User} for the details of the user object.
   */
  user: User
}
