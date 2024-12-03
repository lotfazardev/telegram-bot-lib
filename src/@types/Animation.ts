import { PhotoSize } from './PhotoSize'

export interface Animation {
  file_id: string
  file_unique_id: string
  width: number
  height: number
  duration: number
  thumbnail?: PhotoSize
  file_name?: string
  mime_type?: string
  file_size?: number
}
