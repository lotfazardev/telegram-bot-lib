import { PhotoSize } from './PhotoSize'

export interface SharedUser {
  user_id: number
  first_name?: string
  last_name?: string
  username?: string
  photo?: PhotoSize[]
}
