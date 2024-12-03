import { Chat } from './Chat'

export interface MessageOriginChannel {
  type: 'channel'
  date: number
  chat: Chat
  message_id: number
  author_signature?: string
}
