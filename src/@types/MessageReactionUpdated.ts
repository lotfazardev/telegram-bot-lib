import { Chat } from './Chat'
import { ReactionType } from './ReactionType'
import { User } from './User'

export interface MessageReactionUpdated {
  chat: Chat
  message_id: number
  user?: User
  actor_chat?: Chat
  date: number
  old_reaction: ReactionType[]
  new_reaction: ReactionType[]
}
