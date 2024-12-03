import { Chat } from './Chat'

export interface BusinessMessagesDeleted {
  business_connection_id: string
  chat: Chat
  message_ids: number[]
}
