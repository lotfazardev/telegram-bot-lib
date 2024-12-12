import { Location } from './Location'
import { User } from './User'

export interface InlineQuery {
  id: string
  from: User
  query: string
  offset: string
  chat_type?: string
  location?: Location
}
