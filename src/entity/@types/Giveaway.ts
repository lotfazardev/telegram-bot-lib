import { Chat } from './Chat'

export interface Giveaway {
  chats: Chat[]
  winners_selection_date: number
  winner_count: number
  only_new_members?: true
  has_public_winners?: true
  prize_description?: string
  country_codes?: string[]
  premium_subscription_month_count?: number
}
