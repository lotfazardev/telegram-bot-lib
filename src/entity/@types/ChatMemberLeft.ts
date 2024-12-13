import { User } from './User'

export interface ChatMemberLeft {
  status: 'left'
  user: User
}
