import { User } from './User'

/**
 * Represents the owner of a chat.
 *
 */
export interface ChatMemberOwner {
  /**
   * The member's status in the chat, always "creator".
   * @example "creator"
   */
  status: 'creator'

  /**
   * Information about the user.
   * See {@link User} for more details.
   */
  user: User

  /**
   * Indicates if the user's presence in the chat is hidden.
   * @example true
   */
  is_anonymous: boolean

  /**
   * Optional. Custom title for this user.
   * @example "Chat Administrator"
   */
  custom_title?: string
}
