import { OrderInfo } from './OrderInfo'

/**
 * This object contains basic information about a successful payment.
 *
 */
export interface SuccessfulPayment {
  /**
   * Three-letter ISO 4217 [Currency](https://core.telegram.org/bots/payments#supported-currencies) code, or "XTR" for payments in Telegram Stars.
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
   * Expiration date of the subscription, in Unix time; for recurring payments only.
   */
  subscription_expiration_date?: number

  /**
   * True, if the payment is a recurring payment for a subscription.
   */
  is_recurring?: boolean

  /**
   * True, if the payment is the first payment for a subscription.
   */
  is_first_recurring?: boolean

  /**
   * Identifier of the shipping option chosen by the user.
   */
  shipping_option_id?: string

  /**
   * Order information provided by the user.
   */
  order_info?: OrderInfo

  /**
   * Telegram payment identifier.
   */
  telegram_payment_charge_id: string

  /**
   * Provider payment identifier.
   */
  provider_payment_charge_id: string
}
