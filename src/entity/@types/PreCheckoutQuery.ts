import { OrderInfo } from './OrderInfo'
import { User } from './User'

/**
 * This object contains information about an incoming pre-checkout query.
 *
 */
export interface PreCheckoutQuery {
  /**
   * Unique query identifier.
   */
  id: string

  /**
   * User who sent the query.
   */
  from: User

  /**
   * Three-letter ISO 4217 [Currency](https://core.telegram.org/bots/payments#supported-currencies) code, or “XTR” for payments in Telegram Stars.
   */
  currency: string

  /**
   * Total price in the smallest units of the currency (integer, not float/double).
   * For example, for a price of US$ 1.45 pass amount = 145.
   */
  total_amount: number

  /**
   * Bot-specified invoice payload.
   */
  invoice_payload: string

  /**
   * Optional. Identifier of the shipping option chosen by the user.
   */
  shipping_option_id?: string

  /**
   * Optional. Order information provided by the user.
   */
  order_info?: OrderInfo
}
