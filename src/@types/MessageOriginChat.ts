import { Chat } from './Chat'

export interface MessageOriginChat {
  type: 'chat'
  date: number
  sender_chat: Chat
  author_signature?: string
}
