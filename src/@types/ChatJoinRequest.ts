import { Chat } from './Chat'
import { ChatInviteLink } from './ChatInviteLink'
import { User } from './User'

/**
 * Represents a join request sent to a chat.
 *
 * @see {@link Chat} for details about the chat to which the request was sent.
 * @see {@link User} for details about the user who sent the join request.
 * @see {@link ChatInviteLink} for details about the chat invite link used.
 */
export interface ChatJoinRequest {
  /**
   * Chat to which the request was sent.
   *
   * @see {@link Chat} for the details of the chat object.
   */
  chat: Chat

  /**
   * User that sent the join request.
   *
   * @see {@link User} for the details of the user object.
   */
  from: User

  /**
   * Identifier of a private chat with the user who sent the join request.
   * This number may have more than 32 significant bits, and some programming languages
   * may have difficulty interpreting it. It has at most 52 significant bits, so a 64-bit
   * integer or double-precision float type is safe for storing this identifier.
   * The bot can use this identifier for 5 minutes to send messages until the join request
   * is processed, assuming no other administrator contacted the user.
   */
  user_chat_id: number

  /**
   * Date the request was sent in Unix time.
   */
  date: number

  /**
   * Optional. Bio of the user who sent the join request.
   */
  bio?: string

  /**
   * Optional. Chat invite link that was used by the user to send the join request.
   *
   * @see {@link ChatInviteLink} for the details of the chat invite link object.
   */
  invite_link?: ChatInviteLink
}
