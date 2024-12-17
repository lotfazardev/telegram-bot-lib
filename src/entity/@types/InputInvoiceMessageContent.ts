import { LabeledPrice } from './LabeledPrice'

/**
 * Represents the content of an invoice message to be sent as the result of an inline query.
 */
export interface InputInvoiceMessageContent {
  /**
   * Product name, 1-32 characters.
   */
  title: string

  /**
   * Product description, 1-255 characters.
   */
  description: string

  /**
   * Bot-defined invoice payload, 1-128 bytes. This will not be displayed to the user, use it for your internal processes.
   */
  payload: string

  /**
   * Optional. Payment provider token, obtained via @BotFather. Pass an empty string for payments in Telegram Stars.
   */
  provider_token?: string

  /**
   * Three-letter ISO 4217 currency code. Pass "XTR" for payments in Telegram Stars.
   */
  currency: string

  /**
   * Price breakdown, a JSON-serialized list of components (e.g. product price, tax, discount, delivery cost, delivery tax, bonus, etc.).
   * Must contain exactly one item for payments in Telegram Stars.
   */
  prices: LabeledPrice[]

  /**
   * Optional. The maximum accepted amount for tips in the smallest units of the currency (integer, not float/double).
   * Defaults to 0. Not supported for payments in Telegram Stars.
   */
  max_tip_amount?: number

  /**
   * Optional. A JSON-serialized array of suggested amounts of tip in the smallest units of the currency.
   * At most 4 suggested tip amounts can be specified.
   */
  suggested_tip_amounts?: number[]

  /**
   * Optional. A JSON-serialized object for data about the invoice, which will be shared with the payment provider.
   */
  provider_data?: string

  /**
   * Optional. URL of the product photo for the invoice. Can be a photo of the goods or a marketing image for a service.
   */
  photo_url?: string

  /**
   * Optional. Photo size in bytes.
   */
  photo_size?: number

  /**
   * Optional. Photo width.
   */
  photo_width?: number

  /**
   * Optional. Photo height.
   */
  photo_height?: number

  /**
   * Optional. Pass True if you require the user's full name to complete the order. Ignored for payments in Telegram Stars.
   */
  need_name?: boolean

  /**
   * Optional. Pass True if you require the user's phone number to complete the order. Ignored for payments in Telegram Stars.
   */
  need_phone_number?: boolean

  /**
   * Optional. Pass True if you require the user's email address to complete the order. Ignored for payments in Telegram Stars.
   */
  need_email?: boolean

  /**
   * Optional. Pass True if you require the user's shipping address to complete the order. Ignored for payments in Telegram Stars.
   */
  need_shipping_address?: boolean

  /**
   * Optional. Pass True if the user's phone number should be sent to the provider. Ignored for payments in Telegram Stars.
   */
  send_phone_number_to_provider?: boolean

  /**
   * Optional. Pass True if the user's email address should be sent to the provider. Ignored for payments in Telegram Stars.
   */
  send_email_to_provider?: boolean

  /**
   * Optional. Pass True if the final price depends on the shipping method. Ignored for payments in Telegram Stars.
   */
  is_flexible?: boolean
}
