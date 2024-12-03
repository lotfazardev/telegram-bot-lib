import { User } from './User'

export interface ChatMemberBanned {
  status: 'kicked'
  user: User
  until_date: number
}
