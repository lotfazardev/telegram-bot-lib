import { Chat } from './Chat'
import { ChatBoostSource } from './ChatBoostSource'

export interface ChatBoostRemoved {
  chat: Chat
  boost_id: string
  remove_date: number
  source: ChatBoostSource
}
