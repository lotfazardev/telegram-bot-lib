import { User } from './User'

/**
 * Represents a chat member with administrator privileges.
 */
export interface ChatMemberAdministrator {
  /**
   * The member's status in the chat, always "administrator".
   */
  status: 'administrator'

  /**
   * Information about the user.
   * See {@link User} for more details.
   */
  user: User

  /**
   * Indicates whether the bot can edit the administrator privileges of this user.
   *
   * @example
   * true
   */
  can_be_edited: boolean

  /**
   * Indicates if the user's presence in the chat is hidden.
   *
   * @example
   * false
   */
  is_anonymous: boolean

  /**
   * Indicates if the administrator has privileges to access the chat event log,
   * get boost list, see hidden members, report spam messages, and ignore slow mode.
   * This privilege is implied by any other administrator privilege.
   */
  can_manage_chat: boolean

  /**
   * Indicates if the administrator can delete messages of other users.
   *
   * @example
   * true
   */
  can_delete_messages: boolean

  /**
   * Indicates if the administrator can manage video chats in the chat.
   *
   * @example
   * true
   */
  can_manage_video_chats: boolean

  /**
   * Indicates if the administrator can restrict, ban, or unban chat members.
   * This also includes access to supergroup statistics.
   *
   * @example
   * true
   */
  can_restrict_members: boolean

  /**
   * Indicates if the administrator can add new administrators with a subset
   * of their own privileges or demote administrators that they have promoted.
   *
   * @example
   * true
   */
  can_promote_members: boolean

  /**
   * Indicates if the user is allowed to change the chat's title, photo, and other settings.
   *
   * @example
   * true
   */
  can_change_info: boolean

  /**
   * Indicates if the user can invite new users to the chat.
   *
   * @example
   * true
   */
  can_invite_users: boolean

  /**
   * Indicates if the administrator can post stories to the chat.
   *
   * @example
   * false
   */
  can_post_stories: boolean

  /**
   * Indicates if the administrator can edit stories posted by other users,
   * post stories to the chat page, pin chat stories, and access the chat's story archive.
   *
   * @example
   * true
   */
  can_edit_stories: boolean

  /**
   * Indicates if the administrator can delete stories posted by other users.
   *
   * @example
   * true
   */
  can_delete_stories: boolean

  /**
   * Optional. Indicates if the administrator can post messages in the channel
   * or access channel statistics (for channels only).
   */
  can_post_messages?: boolean

  /**
   * Optional. Indicates if the administrator can edit messages from other users
   * and pin messages (for channels only).
   */
  can_edit_messages?: boolean

  /**
   * Optional. Indicates if the user can pin messages (for groups and supergroups only).
   */
  can_pin_messages?: boolean

  /**
   * Optional. Indicates if the user can create, rename, close, and reopen forum topics
   * (for supergroups only).
   */
  can_manage_topics?: boolean

  /**
   * Optional. A custom title for this administrator.
   *
   * @example
   * "Moderator"
   */
  custom_title?: string
}
