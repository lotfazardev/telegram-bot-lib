import { Message } from './Message'
import { BusinessConnection } from './BusinessConnection'
import { MessageReactionUpdated } from './MessageReactionUpdated'
import { MessageReactionCountUpdated } from './MessageReactionCountUpdated'
import { InlineQuery } from './InlineQuery'
import { ChosenInlineResult } from './ChosenInlineResult'
import { CallbackQuery } from './CallbackQuery'
import { ShippingQuery } from './ShippingQuery'
import { PreCheckoutQuery } from './PreCheckoutQuery'
import { PaidMediaPurchased } from './PaidMediaPurchased'
import { Poll } from './Poll'
import { PollAnswer } from './PollAnswer'
import { ChatMemberUpdated } from './ChatMemberUpdated'
import { ChatJoinRequest } from './ChatJoinRequest'
import { ChatBoostUpdated } from './ChatBoostUpdated'
import { ChatBoostRemoved } from './ChatBoostRemoved'
import { BusinessMessagesDeleted } from './BusinessMessagesDeleted'

/**
 * This object represents an incoming update.
 * At most one of the optional parameters can be present in any given update.
 */
export interface Update {
  /**
   * The update's unique identifier.
   * Update identifiers start from a certain positive number and increase sequentially.
   * This identifier becomes especially handy if you're using webhooks, since it allows you to ignore repeated updates or restore the correct update sequence.
   * If there are no new updates for at least a week, the next update identifier will be chosen randomly.
   */
  update_id: number

  /**
   * Optional. New incoming message of any kind - text, photo, sticker, etc.
   */
  message?: Message

  /**
   * Optional. New version of a message that is known to the bot and was edited.
   * This update may at times be triggered by changes to message fields that are either unavailable or not actively used by your bot.
   */
  edited_message?: Message

  /**
   * Optional. New incoming channel post of any kind - text, photo, sticker, etc.
   */
  channel_post?: Message

  /**
   * Optional. New version of a channel post that is known to the bot and was edited.
   * This update may at times be triggered by changes to message fields that are either unavailable or not actively used by your bot.
   */
  edited_channel_post?: Message

  /**
   * Optional. The bot was connected to or disconnected from a business account, or a user edited an existing connection with the bot.
   */
  business_connection?: BusinessConnection

  /**
   * Optional. New message from a connected business account.
   */
  business_message?: Message

  /**
   * Optional. New version of a message from a connected business account.
   */
  edited_business_message?: Message

  /**
   * Optional. Messages were deleted from a connected business account.
   */
  deleted_business_messages?: BusinessMessagesDeleted

  /**
   * Optional. A reaction to a message was changed by a user.
   * The bot must be an administrator in the chat and must explicitly specify "message_reaction" in the list of allowed_updates to receive these updates.
   * The update isn't received for reactions set by bots.
   */
  message_reaction?: MessageReactionUpdated

  /**
   * Optional. Reactions to a message with anonymous reactions were changed.
   * The bot must be an administrator in the chat and must explicitly specify "message_reaction_count" in the list of allowed_updates to receive these updates.
   * The updates are grouped and can be sent with delay up to a few minutes.
   */
  message_reaction_count?: MessageReactionCountUpdated

  /**
   * Optional. New incoming inline query.
   */
  inline_query?: InlineQuery

  /**
   * Optional. The result of an inline query that was chosen by a user and sent to their chat partner.
   * Please see our documentation on feedback collecting for details on how to enable these updates for your bot.
   */
  chosen_inline_result?: ChosenInlineResult

  /**
   * Optional. New incoming callback query.
   */
  callback_query?: CallbackQuery

  /**
   * Optional. New incoming shipping query. Only for invoices with flexible price.
   */
  shipping_query?: ShippingQuery

  /**
   * Optional. New incoming pre-checkout query. Contains full information about checkout.
   */
  pre_checkout_query?: PreCheckoutQuery

  /**
   * Optional. A user purchased paid media with a non-empty payload sent by the bot in a non-channel chat.
   */
  purchased_paid_media?: PaidMediaPurchased

  /**
   * Optional. New poll state. Bots receive only updates about manually stopped polls and polls, which are sent by the bot.
   */
  poll?: Poll

  /**
   * Optional. A user changed their answer in a non-anonymous poll.
   * Bots receive new votes only in polls that were sent by the bot itself.
   */
  poll_answer?: PollAnswer

  /**
   * Optional. The bot's chat member status was updated in a chat.
   * For private chats, this update is received only when the bot is blocked or unblocked by the user.
   */
  my_chat_member?: ChatMemberUpdated

  /**
   * Optional. A chat member's status was updated in a chat.
   * The bot must be an administrator in the chat and must explicitly specify "chat_member" in the list of allowed_updates to receive these updates.
   */
  chat_member?: ChatMemberUpdated

  /**
   * Optional. A request to join the chat has been sent.
   * The bot must have the can_invite_users administrator right in the chat to receive these updates.
   */
  chat_join_request?: ChatJoinRequest

  /**
   * Optional. A chat boost was added or changed.
   * The bot must be an administrator in the chat to receive these updates.
   */
  chat_boost?: ChatBoostUpdated

  /**
   * Optional. A boost was removed from a chat.
   * The bot must be an administrator in the chat to receive these updates.
   */
  removed_chat_boost?: ChatBoostRemoved
}
