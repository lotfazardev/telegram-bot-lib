/**
 * Represents the type of a Telegram chat.
 *
 * Possible values:
 * - `'private'`: A private one-on-one chat.
 * - `'group'`: A basic group chat with multiple participants.
 * - `'supergroup'`: A supergroup chat, usually larger and with additional features.
 * - `'channel'`: A channel used for broadcasting messages to an audience.
 */
export type ChatType = 'private' | 'group' | 'supergroup' | 'channel'

/**
 * This interface represents a chat in Telegram.
 */
export interface Chat {
  /**
   * Unique identifier for this chat.
   * This number may have more than 32 significant bits, so use a 64-bit integer or double-precision float to safely store it.
   */
  id: number

  /**
   * Type of the chat. For details, see {@link ChatType}.
   */
  type: ChatType

  /**
   * Title of the chat (optional).
   * Available for supergroups, channels, and group chats.
   */
  title?: string

  /**
   * Username of the chat (optional).
   * Available for private chats, supergroups, and channels, if set.
   */
  username?: string

  /**
   * First name of the other party in a private chat (optional).
   */
  first_name?: string

  /**
   * Last name of the other party in a private chat (optional).
   */
  last_name?: string

  /**
   * Indicates if the supergroup chat is a forum with topics enabled (optional).
   * Only applicable to supergroup chats.
   */
  is_forum?: boolean
}

// import { Birthdate } from './Birthdate'
// import { BusinessIntro } from './BusinessIntro'
// import { BusinessLocation } from './BusinessLocation'
// import { BusinessOpeningHours } from './BusinessOpeningHours'
// import { ChatLocation } from './ChatLocation'
// import { ChatPermissions } from './ChatPermissions'
// import { ChatPhoto } from './ChatPhoto'
// import { Message } from './Message'
// import { ReactionType } from './ReactionType'

// export interface Chat {
//   id: number
//   type: string
//   title?: string
//   username?: string
//   first_name?: string
//   last_name?: string
//   is_forum?: boolean
//   photo?: ChatPhoto
//   active_usernames?: string[]
//   birthdate?: Birthdate
//   business_intro?: BusinessIntro
//   business_location?: BusinessLocation
//   business_opening_hours?: BusinessOpeningHours
//   personal_chat?: Chat
//   available_reactions?: ReactionType[]
//   accent_color_id?: number
//   background_custom_emoji_id?: string
//   profile_accent_color_id?: number
//   profile_background_custom_emoji_id?: string
//   emoji_status_custom_emoji_id?: string
//   emoji_status_expiration_date?: number
//   bio?: string
//   has_private_forwards?: boolean
//   has_restricted_voice_and_video_messages?: boolean
//   join_to_send_messages?: boolean
//   join_by_request?: boolean
//   description?: string
//   invite_link?: string
//   pinned_message?: Message
//   permissions?: ChatPermissions
//   slow_mode_delay?: number
//   unrestrict_boost_count?: number
//   message_auto_delete_time?: number
//   has_aggressive_anti_spam_enabled?: boolean
//   has_hidden_members?: boolean
//   has_protected_content?: boolean
//   has_visible_history?: boolean
//   sticker_set_name?: string
//   can_set_sticker_set?: boolean
//   custom_emoji_sticker_set_name?: string
//   linked_chat_id?: number
//   location?: ChatLocation
// }
