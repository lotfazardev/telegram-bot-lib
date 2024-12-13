import { User } from './User'

export interface ChatMemberOwner {
  status: 'creator'
  user: User
  is_anonymous: boolean
  custom_title?: string
}
