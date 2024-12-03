import { MessageEntity } from './MessageEntity'

export interface TextQuote {
  text: string
  entities?: MessageEntity[]
  position: number
  is_manual?: boolean
}
