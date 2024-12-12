import { BusinessConnection } from './BusinessConnection'
import { BusinessMessagesDeleted } from './BusinessMessagesDeleted'
import { CallbackQuery } from './CallbackQuery'
import { ChatBoostRemoved } from './ChatBoostRemoved'
import { ChatBoostUpdated } from './ChatBoostUpdated'
import { ChatJoinRequest } from './ChatJoinRequest'
import { ChatMemberUpdated } from './ChatMemberUpdated'
import { ChosenInlineResult } from './ChosenInlineResult'
import { InlineQuery } from './InlineQuery'
import { Message } from './Message'
import { MessageReactionCountUpdated } from './MessageReactionCountUpdated'
import { MessageReactionUpdated } from './MessageReactionUpdated'
import { Poll } from './Poll'
import { PollAnswer } from './PollAnswer'
import { PreCheckoutQuery } from './PreCheckoutQuery'
import { ShippingQuery } from './ShippingQuery'

export interface Update {
  update_id: number
  message?: Message
  edited_message?: Message
  channel_post?: Message
  edited_channel_post?: Message
  business_connection?: BusinessConnection
  business_message?: Message
  edited_business_message?: Message
  deleted_business_messages?: BusinessMessagesDeleted
  message_reaction?: MessageReactionUpdated
  message_reaction_count?: MessageReactionCountUpdated
  inline_query?: InlineQuery
  chosen_inline_result?: ChosenInlineResult
  callback_query?: CallbackQuery
  shipping_query?: ShippingQuery
  pre_checkout_query?: PreCheckoutQuery
  poll?: Poll
  poll_answer?: PollAnswer
  my_chat_member?: ChatMemberUpdated
  chat_member?: ChatMemberUpdated
  chat_join_request?: ChatJoinRequest
  chat_boost?: ChatBoostUpdated
  removed_chat_boost?: ChatBoostRemoved
}
