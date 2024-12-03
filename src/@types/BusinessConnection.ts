import { User } from './User'

export interface BusinessConnection {
  id: string
  user: User
  user_chat_id: number
  date: number
  can_reply: boolean
  is_enabled: boolean
}
