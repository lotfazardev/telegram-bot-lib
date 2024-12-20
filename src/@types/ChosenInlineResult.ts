import { Location } from './Location'
import { User } from './User'

export interface ChosenInlineResult {
  result_id: string
  from: User
  location?: Location
  inline_message_id?: string
  query: string
}
