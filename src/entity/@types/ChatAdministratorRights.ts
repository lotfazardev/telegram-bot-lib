/**
 * Represents the rights of an administrator in a chat.
 */
export interface ChatAdministratorRights {
  /**
   * Indicates whether the user's presence in the chat is hidden.
   *
   * @example
   * true
   */
  is_anonymous: boolean

  /**
   * Indicates whether the administrator can access the chat event log, get the boost list, see hidden supergroup and channel members, report spam messages, and ignore slow mode.
   * This privilege is implied by any other administrator privilege.
   *
   * @example
   * true
   */
  can_manage_chat: boolean

  /**
   * Indicates whether the administrator can delete messages of other users.
   *
   * @example
   * true
   */
  can_delete_messages: boolean

  /**
   * Indicates whether the administrator can manage video chats.
   *
   * @example
   * false
   */
  can_manage_video_chats: boolean

  /**
   * Indicates whether the administrator can restrict, ban or unban chat members, or access supergroup statistics.
   *
   * @example
   * true
   */
  can_restrict_members: boolean

  /**
   * Indicates whether the administrator can add new administrators with a subset of their own privileges or demote administrators they have promoted.
   *
   * @example
   * true
   */
  can_promote_members: boolean

  /**
   * Indicates whether the user is allowed to change the chat title, photo, and other settings.
   *
   * @example
   * true
   */
  can_change_info: boolean

  /**
   * Indicates whether the user is allowed to invite new users to the chat.
   *
   * @example
   * true
   */
  can_invite_users: boolean

  /**
   * Indicates whether the administrator can post stories to the chat.
   *
   * @example
   * false
   */
  can_post_stories: boolean

  /**
   * Indicates whether the administrator can edit stories posted by other users, post stories to the chat page, pin chat stories, and access the chat's story archive.
   *
   * @example
   * false
   */
  can_edit_stories: boolean

  /**
   * Indicates whether the administrator can delete stories posted by other users.
   *
   * @example
   * false
   */
  can_delete_stories: boolean

  /**
   * Optional. Indicates whether the administrator can post messages in the channel or access channel statistics.
   * Applies to channels only.
   *
   * @example
   * true
   */
  can_post_messages?: boolean

  /**
   * Optional. Indicates whether the administrator can edit messages of other users and pin messages.
   * Applies to channels only.
   *
   * @example
   * true
   */
  can_edit_messages?: boolean

  /**
   * Optional. Indicates whether the user is allowed to pin messages.
   * Applies to groups and supergroups only.
   *
   * @example
   * true
   */
  can_pin_messages?: boolean

  /**
   * Optional. Indicates whether the user is allowed to create, rename, close, and reopen forum topics.
   * Applies to supergroups only.
   *
   * @example
   * false
   */
  can_manage_topics?: boolean
}
