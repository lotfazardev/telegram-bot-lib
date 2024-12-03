import { Chat } from './Chat'
import { ChatInviteLink } from './ChatInviteLink'
import { ChatMember } from './ChatMember'
import { User } from './User'

export interface ChatMemberUpdated {
  chat: Chat
  from: User
  date: number
  old_chat_member: ChatMember
  new_chat_member: ChatMember
  invite_link?: ChatInviteLink
  via_chat_folder_invite_link?: boolean
}
