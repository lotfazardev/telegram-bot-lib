import { User } from './User'

export interface ChatBoostSourceGiveaway {
  source: 'giveaway'
  giveaway_message_id: number
  user?: User
  is_unclaimed?: boolean
}
