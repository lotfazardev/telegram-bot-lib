/**
 * This object contains basic information about a refunded payment.
 *
 */
export interface RefundedPayment {
  /**
   * Three-letter ISO 4217 [Currency](https://core.telegram.org/bots/payments#supported-currencies) code, or "XTR" for payments in Telegram Stars.
   * Currently, always "XTR".
   */
  currency: string

  /**
   * Total refunded price in the smallest units of the currency (integer, not float/double).
   * For example, for a price of US$ 1.45, total_amount = 145.
   */
  total_amount: number

  /**
   * Bot-specified invoice payload.
   */
  invoice_payload: string

  /**
   * Telegram payment identifier.
   */
  telegram_payment_charge_id: string

  /**
   * Optional. Provider payment identifier.
   */
  provider_payment_charge_id?: string
}
