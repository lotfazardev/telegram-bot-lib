import { User } from './User'

export interface MessageOriginUser {
  type: 'user'
  date: number
  sender_user: User
}
