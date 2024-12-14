import { Chat } from './Chat'
import { ChatInviteLink } from './ChatInviteLink'
import { ChatMember } from './ChatMember'
import { User } from './User'

/**
 * Represents changes in the status of a chat member.
 */
export interface ChatMemberUpdated {
  /**
   * Chat the user belongs to.
   * See {@link Chat} for more details.
   */
  chat: Chat

  /**
   * The user who performed the action that resulted in the change.
   * See {@link User} for more details.
   */
  from: User

  /**
   * The date the change was made, in Unix time.
   *
   * @example
   * 1672531200 // Represents a specific date and time.
   */
  date: number

  /**
   * Previous information about the chat member.
   * See {@link ChatMember} for more details.
   */
  old_chat_member: ChatMember

  /**
   * New information about the chat member.
   * See {@link ChatMember} for more details.
   */
  new_chat_member: ChatMember

  /**
   * Optional. The chat invite link used by the user to join the chat.
   * Applies to join events via an invite link only.
   * See {@link ChatInviteLink} for more details.
   *
   * @example
   * {
   *   invite_link: "https://t.me/joinchat/Abc123...",
   *   creator: { ... },
   *   is_primary: false,
   *   is_revoked: false
   * }
   */
  invite_link?: ChatInviteLink

  /**
   * Optional. Indicates if the user joined the chat after sending a direct join request without using an invite link and was approved by an administrator.
   *
   * @example
   * true
   */
  via_join_request?: boolean

  /**
   * Optional. Indicates if the user joined the chat via a chat folder invite link.
   *
   * @example
   * false
   */
  via_chat_folder_invite_link?: boolean
}
