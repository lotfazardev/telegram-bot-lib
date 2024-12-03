import { User } from './User'

export interface MessageEntity {
  type: string
  offset: number
  length: number
  url?: string
  user?: User
  language?: string
  custom_emoji_id?: string
}
