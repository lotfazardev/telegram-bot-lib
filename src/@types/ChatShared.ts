import { PhotoSize } from './PhotoSize'

export interface ChatShared {
  request_id: number
  chat_id: number
  title?: string
  username?: string
  photo?: PhotoSize[]
}
