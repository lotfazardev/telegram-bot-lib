import { Chat } from './Chat'
import { User } from './User'

export interface PollAnswer {
  poll_id: string
  voter_chat?: Chat
  user?: User
  option_ids: number[]
}
