import { Chat } from './Chat'
import { User } from './User'

export interface GiveawayWinners {
  chat: Chat
  giveaway_message_id: number
  winners_selection_date: number
  winner_count: number
  winners: User[]
  additional_chat_count?: number
  premium_subscription_month_count?: number
  unclaimed_prize_count?: number
  only_new_members?: true
  was_refunded?: true
  prize_description?: string
}
