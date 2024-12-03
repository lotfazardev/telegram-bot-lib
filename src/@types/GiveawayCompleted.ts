import { Message } from './Message'

export interface GiveawayCompleted {
  winner_count: number
  unclaimed_prize_count?: number
  giveaway_message?: Message
}
