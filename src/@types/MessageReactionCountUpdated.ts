import { Chat } from './Chat'
import { ReactionCount } from './ReactionCount'

export interface MessageReactionCountUpdated {
  chat: Chat
  message_id: number
  date: number
  reactions: ReactionCount[]
}
