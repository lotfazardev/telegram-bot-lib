import { ChatBoostSource } from './ChatBoostSource'

export interface ChatBoost {
  boost_id: string
  add_date: number
  expiration_date: number
  source: ChatBoostSource
}
