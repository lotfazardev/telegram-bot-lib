import { Chat } from './Chat'
import { ChatInviteLink } from './ChatInviteLink'
import { User } from './User'

export interface ChatJoinRequest {
  chat: Chat
  from: User
  user_chat_id: number
  date: number
  bio?: string
  invite_link?: ChatInviteLink
}
