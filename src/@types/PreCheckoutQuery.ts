import { OrderInfo } from './OrderInfo'
import { User } from './User'

export interface PreCheckoutQuery {
  id: string
  from: User
  currency: string
  total_amount: number
  invoice_payload: string
  shipping_option_id?: string
  order_info?: OrderInfo
}
