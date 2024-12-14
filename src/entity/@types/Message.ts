import { Animation } from './Animation'
import { Audio } from './Audio'
import { Chat } from './Chat'
import { ChatBoostAdded } from './ChatBoostAdded'
import { ChatShared } from './ChatShared'
import { Contact } from './Contact'
import { Dice } from './Dice'
import { Document } from './Document'
import { ExternalReplyInfo } from './ExternalReplyInfo'
import { ForumTopicClosed } from './ForumTopicClosed'
import { ForumTopicCreated } from './ForumTopicCreated'
import { ForumTopicReopened } from './ForumTopicReopened'
import { Game } from './Game'
import { GeneralForumTopicHidden } from './GeneralForumTopicHidden'
import { GeneralForumTopicUnhidden } from './GeneralForumTopicUnhidden'
import { Giveaway } from './Giveaway'
import { GiveawayCompleted } from './GiveawayCompleted'
import { GiveawayCreated } from './GiveawayCreated'
import { GiveawayWinners } from './GiveawayWinners'
import { InlineKeyboardMarkup } from './InlineKeyboardMarkup'
import { Invoice } from './Invoice'
import { LinkPreviewOptions } from './LinkPreviewOptions'
import { Location } from './Location'
import { MaybeInaccessibleMessage } from './MaybeInaccessibleMessage'
import { MessageAutoDeleteTimerChanged } from './MessageAutoDeleteTimerChanged'
import { MessageEntity } from './MessageEntity'
import { MessageOrigin } from './MessageOrigin'
import { PassportData } from './PassportData'
import { PhotoSize } from './PhotoSize'
import { Poll } from './Poll'
import { ProximityAlertTriggered } from './ProximityAlertTriggered'
import { Sticker } from './Sticker'
import { Story } from './Story'
import { SuccessfulPayment } from './SuccessfulPayment'
import { TextQuote } from './TextQuote'
import { User } from './User'
import { UsersShared } from './UsersShared'
import { Venue } from './Venue'
import { Video } from './Video'
import { VideoChatEnded } from './VideoChatEnded'
import { VideoChatParticipantsInvited } from './VideoChatParticipantsInvited'
import { VideoChatScheduled } from './VideoChatScheduled'
import { VideoChatStarted } from './VideoChatStarted'
import { VideoNote } from './VideoNote'
import { Voice } from './Voice'
import { WebAppData } from './WebAppData'
import { WriteAccessAllowed } from './WriteAccessAllowed'

/**
 * Represents a Telegram message object with detailed information about the content, sender, and other properties.
 */
export interface Message {
  /**
   * Unique message identifier inside this chat.
   * - In specific instances (e.g., message containing a video sent to a large chat), the server might automatically schedule a message instead of sending it immediately.
   * - In such cases, this field will be `0` and the relevant message will be unusable until it is actually sent.
   */
  message_id: number

  /**
   * Optional. Unique identifier of a message thread to which the message belongs; for supergroups only.
   */
  message_thread_id?: number

  /**
   * Optional. Sender of the message.
   * - May be empty for messages sent to channels.
   * - For backward compatibility, if the message was sent on behalf of a chat, the field contains a fake sender user in non-channel chats.
   */
  from?: User

  /**
   * Optional. Sender of the message when sent on behalf of a {@link Chat}.
   * - For example, the supergroup itself for messages sent by its anonymous administrators or a linked channel for messages automatically forwarded to the channel's discussion group.
   * - {@link Chat}
   */
  sender_chat?: Chat

  /**
   * Optional. If the sender of the message boosted the chat, the number of boosts added by the user.
   */
  sender_boost_count?: number

  /**
   * Optional. The bot that actually sent the message on behalf of the business account.
   * - Available only for outgoing messages sent on behalf of the connected business account.
   * - {@link User}
   */
  sender_business_bot?: User

  /**
   * Date the message was sent in Unix time.
   * - Always a positive number representing a valid date.
   */
  date: number

  /**
   * Optional. Unique identifier of the business connection from which the message was received.
   * - If non-empty, the message belongs to a chat of the corresponding business account that is independent from any potential bot chat which might share the same identifier.
   */
  business_connection_id?: string

  /**
   * {@link Chat} the message belongs to.
   * -{@link Chat}
   */
  chat: Chat

  /**
   * Optional. {@link MessageOrigin} Information about the original message for forwarded messages.
   */
  forward_origin?: MessageOrigin

  /**
   * Optional. `true`, if the message is sent to a forum topic.
   */
  is_topic_message?: true

  /**
   * Optional. `true`, if the message is a channel post that was automatically forwarded to the connected discussion group.
   */
  is_automatic_forward?: true

  /**
   * Optional. For replies in the same chat and message thread, the original message.
   * - Note: The `{@link Message}` object in this field will not contain further `reply_to_message` fields even if it itself is a reply.
   */
  reply_to_message?: Message

  /**
   * Optional. Information about the message that is being replied to, which may come from another chat or forum topic.
   * - {@link ExternalReplyInfo}
   */
  external_reply?: ExternalReplyInfo

  /**
   * Optional. For replies that quote part of the original message, the quoted part of the message.
   * - {@link TextQuote}
   */
  quote?: TextQuote

  /**
   * Optional. For replies to a {@link Story}, the original {@link Story}.
   * - {@link Story}
   */
  reply_to_story?: Story

  /**
   * Optional. Bot through which the message was sent.
   * - {@link User}
   */
  via_bot?: User

  /**
   * Optional. Date the message was last edited in Unix time.
   */
  edit_date?: number

  /**
   * Optional. `true`, if the message cannot be forwarded.
   */
  has_protected_content?: true

  /**
   * Optional. `true`, if the message was sent by an implicit action.
   * - For example, as an away or a greeting business message, or as a scheduled message.
   */
  is_from_offline?: true

  /**
   * Optional. The unique identifier of a media message group this message belongs to.
   */
  media_group_id?: string

  /**
   * Optional. Signature of the post author for messages in channels, or the custom title of an anonymous group administrator.
   */
  author_signature?: string

  /**
   * Optional. For text messages, the actual UTF-8 text of the message.
   */
  text?: string

  /**
   * Optional. For text messages, special entities like usernames, URLs, bot commands, etc., that appear in the text.
   * - {@link MessageEntity}
   */
  entities?: MessageEntity[]

  /**
   * Optional. Options used for link preview generation for the message, if it is a text message and link preview options were changed.
   * - {@link LinkPreviewOptions}
   */
  link_preview_options?: LinkPreviewOptions

  /**
   * Optional. Animation attached to the message (e.g., GIFs or small videos without sound).
   * - {@link Animation}
   */
  animation?: Animation

  /**
   * Optional. Audio file attached to the message (e.g., music or podcast).
   * - {@link Audio}
   */
  audio?: Audio

  /**
   * Optional. Document attached to the message (e.g., a file or text document).
   * - {@link Document}
   */
  document?: Document

  /**
   * Optional. Array of photo sizes representing an image sent with the message.
   * - {@link PhotoSize}
   */
  photo?: PhotoSize[]

  /**
   * Optional. Sticker attached to the message.
   * - {@link Sticker}
   */
  sticker?: Sticker

  /**
   * Optional. Story associated with the message.
   * - {@link Story}
   */
  story?: Story

  /**
   * Optional. Video file attached to the message.
   * - {@link Video}
   */
  video?: Video

  /**
   * Optional. Video note (a circular video message) attached to the message.
   * - {@link VideoNote}
   */
  video_note?: VideoNote

  /**
   * Optional. Voice message attached to the message.
   * - {@link Voice}
   */
  voice?: Voice

  /**
   * Optional. Caption for the attached media content (e.g., photo, video, or document).
   */
  caption?: string

  /**
   * Optional. Special entities in the `caption`, such as hashtags, URLs, or mentions.
   * - {@link MessageEntity}
   */
  caption_entities?: MessageEntity[]

  /**
   * Optional. If `true`, indicates that the media in the message is marked as containing spoilers.
   */
  has_media_spoiler?: true

  /**
   * Optional. Contact information attached to the message.
   * - {@link Contact}
   */
  contact?: Contact

  /**
   * Optional. Dice roll animation (used for playful messages).
   * - {@link Dice}
   */
  dice?: Dice

  /**
   * Optional. Game data attached to the message.
   * - {@link Game}
   */
  game?: Game

  /**
   * Optional. Poll information attached to the message.
   * - {@link Poll}
   */
  poll?: Poll

  /**
   * Optional. {@link Venue} information attached to the message (e.g., a physical location with details).
   * - {@link Venue}
   */
  venue?: Venue

  /**
   * Optional. Geographic location attached to the message.
   * - {@link Location}
   */
  location?: Location

  /**
   * Optional. New members added to a group chat via this message.
   * - {@link User}
   */
  new_chat_members?: User[]

  /**
   * Optional. User who left the chat (or was removed).
   * - {@link User}
   */
  left_chat_member?: User

  /**
   * Optional. New title for the chat set via this message.
   */
  new_chat_title?: string

  /**
   * Optional. New photo for the chat set via this message.
   * - {@link PhotoSize}
   */
  new_chat_photo?: PhotoSize[]

  /**
   * Optional. If `true`, indicates that the chat photo has been deleted.
   */
  delete_chat_photo?: true

  /**
   * Optional. If `true`, indicates that the group chat was created.
   */
  group_chat_created?: true

  /**
   * Optional. If `true`, indicates that the supergroup chat was created.
   */
  supergroup_chat_created?: true

  /**
   * Optional. If `true`, indicates that the channel chat was created.
   */
  channel_chat_created?: true

  /**
   * Optional. Information about changes to the chat's auto-delete timer.
   * - {@link MessageAutoDeleteTimerChanged}
   */
  message_auto_delete_timer_changed?: MessageAutoDeleteTimerChanged

  /**
   * Optional. Identifier for a chat to which the current chat was migrated.
   */
  migrate_to_chat_id?: number

  /**
   * Optional. Identifier for a chat from which the current chat was migrated.
   */
  migrate_from_chat_id?: number

  /**
   * Optional. Message pinned in this chat.
   * - {@link MaybeInaccessibleMessage}
   */
  pinned_message?: MaybeInaccessibleMessage

  /**
   * Optional. Invoice data attached to the message.
   * - {@link Invoice}
   */
  invoice?: Invoice

  /**
   * Optional. Information about a successful payment made via this message.
   * - {@link SuccessfulPayment}
   */
  successful_payment?: SuccessfulPayment

  /**
   * Optional. Information about shared users via this message.
   * - {@link UsersShared}
   */
  users_shared?: UsersShared

  /**
   * Optional. Information about a shared chat via this message.
   * - {@link ChatShared}
   */
  chat_shared?: ChatShared

  /**
   * Optional. Connected website data sent with this message.
   */
  connected_website?: string

  /**
   * Optional. If present, indicates that the sender was granted write access.
   * - {@link WriteAccessAllowed}
   */
  write_access_allowed?: WriteAccessAllowed

  /**
   * Optional. Passport data sent via this message.
   * - {@link PassportData}
   */
  passport_data?: PassportData

  /**
   * Optional. Information about proximity alert triggered by this message.
   * - {@link ProximityAlertTriggered}
   */
  proximity_alert_triggered?: ProximityAlertTriggered

  /**
   * Optional. Data related to a chat boost added via this message.
   * - {@link ChatBoostAdded}
   */
  boost_added?: ChatBoostAdded

  /**
   * Optional. Information about a newly created forum topic.
   * - {@link ForumTopicCreated}
   */
  forum_topic_created?: ForumTopicCreated

  /**
   * Optional. Information about an edited forum topic.
   * - {@link ForumTopicCreated}
   */
  forum_topic_edited?: ForumTopicCreated

  /**
   * Optional. If `true`, indicates that a forum topic was closed.
   * - {@link ForumTopicClosed}
   */
  forum_topic_closed?: ForumTopicClosed

  /**
   * Optional. If `true`, indicates that a forum topic was reopened.
   * - {@link ForumTopicReopened}
   */
  forum_topic_reopened?: ForumTopicReopened

  /**
   * Optional. If `true`, indicates that the general forum topic was hidden.
   * - {@link GeneralForumTopicHidden}
   */
  general_forum_topic_hidden?: GeneralForumTopicHidden

  /**
   * Optional. If `true`, indicates that the general forum topic was unhidden.
   * - {@link GeneralForumTopicUnhidden}
   */
  general_forum_topic_unhidden?: GeneralForumTopicUnhidden

  /**
   * Optional. Information about a newly created giveaway.
   * - {@link GiveawayCreated}
   */
  giveaway_created?: GiveawayCreated

  /**
   * Optional. Data related to an ongoing giveaway.
   * - {@link Giveaway}
   */
  giveaway?: Giveaway

  /**
   * Optional. Data about winners of a completed giveaway.
   * - {@link GiveawayWinners}
   */
  giveaway_winners?: GiveawayWinners

  /**
   * Optional. Information about a completed giveaway.
   * - {@link GiveawayCompleted}
   */
  giveaway_completed?: GiveawayCompleted

  /**
   * Optional. Details of a scheduled video chat.
   * - {@link VideoChatScheduled}
   */
  video_chat_scheduled?: VideoChatScheduled

  /**
   * Optional. Details of a started video chat.
   * - {@link VideoChatStarted}
   */
  video_chat_started?: VideoChatStarted

  /**
   * Optional. Details of an ended video chat.
   * - {@link VideoChatEnded}
   */
  video_chat_ended?: VideoChatEnded

  /**
   * Optional. Participants invited to a video chat.
   * - {@link VideoChatParticipantsInvited}
   */
  video_chat_participants_invited?: VideoChatParticipantsInvited

  /**
   * Optional. Data related to a web app launched via this message.
   * - {@link WebAppData}
   */
  web_app_data?: WebAppData

  /**
   * Optional. Inline keyboard attached to the message.
   * - {@link InlineKeyboardMarkup}
   */
  reply_markup?: InlineKeyboardMarkup
}
