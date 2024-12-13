import { PhotoSize } from './PhotoSize'

export interface VideoNote {
  file_id: string
  file_unique_id: string
  length: number
  duration: number
  thumbnail?: PhotoSize
  file_size?: number
}
