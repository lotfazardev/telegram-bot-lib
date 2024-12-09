import { Birthdate } from './Birthdate'
import { BusinessIntro } from './BusinessIntro'
import { BusinessLocation } from './BusinessLocation'
import { BusinessOpeningHours } from './BusinessOpeningHours'
import { Chat, ChatType } from './Chat'
import { ChatLocation } from './ChatLocation'
import { ChatPermissions } from './ChatPermissions'
import { ChatPhoto } from './ChatPhoto'
import { Message } from './Message'
import { ReactionType } from './ReactionType'

/**
 * Represents full information about a chat in Telegram.
 * Contains detailed properties for different types of chats including private, group, supergroup, and channel.
 */
export interface ChatFullInfo {
  /**
   * Unique identifier for this chat.
   * May have more than 32 significant bits. Recommended to use signed 64-bit integer or double-precision float.
   */
  id: number

  /**
   * Type of the chat. For details, see {@link ChatType}.
   */
  type: ChatType

  /**
   * Title of the chat (optional).
   * Applicable for supergroups, channels, and group chats.
   */
  title?: string

  /**
   * Username of the chat (optional).
   * Available for private chats, supergroups, and channels.
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
   * Indicates if the supergroup chat is a forum (has topics enabled) (optional).
   */
  is_forum?: true

  /**
   * Identifier of the accent color for the chat name and backgrounds.
   */
  accent_color_id: number

  /**
   * The maximum number of reactions that can be set on a message in this chat.
   */
  max_reaction_count: number

  /**
   * Photo of the chat.
   */
  photo?: ChatPhoto

  /**
   * List of active chat usernames (optional).
   */
  active_usernames?: string[]

  /**
   * Birthdate of the user in a private chat (optional).
   */
  birthdate?: Birthdate

  /**
   * Business introduction for private chats with business accounts (optional).
   */
  business_intro?: BusinessIntro

  /**
   * Business location for private chats with business accounts (optional).
   */
  business_location?: BusinessLocation

  /**
   * Business opening hours for private chats with business accounts (optional).
   */
  business_opening_hours?: BusinessOpeningHours

  /**
   * Personal channel of the user in a private chat (optional).
   */
  personal_chat?: Chat

  /**
   * List of available reactions allowed in the chat (optional).
   * If omitted, all emoji reactions are allowed.
   */
  available_reactions?: ReactionType[]

  /**
   * Custom emoji identifier for the chat's background (optional).
   */
  background_custom_emoji_id?: string

  /**
   * Identifier of the accent color for the chat's profile background (optional).
   */
  profile_accent_color_id?: number

  /**
   * Custom emoji identifier for the chat's profile background (optional).
   */
  profile_background_custom_emoji_id?: string

  /**
   * Custom emoji identifier for the chat's emoji status (optional).
   */
  emoji_status_custom_emoji_id?: string

  /**
   * Expiration date of the emoji status in Unix time (optional).
   */
  emoji_status_expiration_date?: number

  /**
   * Bio of the other party in a private chat (optional).
   */
  bio?: string

  /**
   * Indicates if privacy settings allow using user links only in chats with the user (optional).
   */
  has_private_forwards?: true

  /**
   * Indicates if privacy settings restrict sending voice and video note messages (optional).
   */
  has_restricted_voice_and_video_messages?: true

  /**
   * Indicates if users need to join the supergroup before sending messages (optional).
   */
  join_to_send_messages?: true

  /**
   * Indicates if users joining the supergroup need to be approved by administrators (optional).
   */
  join_by_request?: true

  /**
   * Description of the chat for groups, supergroups, and channels (optional).
   */
  description?: string

  /**
   * Primary invite link for the chat (optional).
   */
  invite_link?: string

  /**
   * The most recent pinned message in the chat (optional).
   */
  pinned_message?: Message

  /**
   * Default chat member permissions for groups and supergroups (optional).
   */
  permissions?: ChatPermissions

  /**
   * Indicates if paid media messages can be sent or forwarded to the channel chat (optional).
   */
  can_send_paid_media?: true

  /**
   * Minimum allowed delay between consecutive messages for unprivileged users (in seconds) (optional).
   */
  slow_mode_delay?: number

  /**
   * Minimum number of boosts needed to ignore slow mode and chat permissions (optional).
   */
  unrestrict_boost_count?: number

  /**
   * Time after which all messages sent to the chat will be automatically deleted (in seconds) (optional).
   */
  message_auto_delete_time?: number

  /**
   * Indicates if aggressive anti-spam checks are enabled (only visible to administrators) (optional).
   */
  has_aggressive_anti_spam_enabled?: true

  /**
   * Indicates if non-administrators can only see bots and administrators in the chat (optional).
   */
  has_hidden_members?: true

  /**
   * Indicates if messages from the chat can't be forwarded to other chats (optional).
   */
  has_protected_content?: true

  /**
   * Indicates if new chat members will have access to old messages (optional).
   */
  has_visible_history?: true

  /**
   * Name of the group sticker set for supergroups (optional).
   */
  sticker_set_name?: string

  /**
   * Indicates if the bot can change the group sticker set (optional).
   */
  can_set_sticker_set?: true

  /**
   * Name of the group's custom emoji sticker set (optional).
   */
  custom_emoji_sticker_set_name?: string

  /**
   * Unique identifier for the linked chat (discussion group for channels) (optional).
   */
  linked_chat_id?: number

  /**
   * Location to which the supergroup is connected (optional).
   */
  location?: ChatLocation
}
