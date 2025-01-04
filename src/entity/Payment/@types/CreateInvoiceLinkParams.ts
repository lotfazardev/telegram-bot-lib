import { LabeledPrice } from '@entity/@types/LabeledPrice'

/**
 * Represents the parameters required to create an invoice link using the `createInvoiceLink` method.
 */
export interface CreateInvoiceLinkParams {
  /**
   * Optional. Unique identifier of the business connection on behalf of which the link will be created.
   * Used for payments in Telegram Stars only.
   */
  business_connection_id?: string

  /**
   * Required. Product name, 1-32 characters.
   */
  title: string

  /**
   * Required. Product description, 1-255 characters.
   */
  description: string

  /**
   * Required. Bot-defined invoice payload, 1-128 bytes. This will not be displayed to the user;
   * use it for your internal processes.
   */
  payload: string

  /**
   * Optional. Payment provider token, obtained via `@BotFather`. Pass an empty string for payments in Telegram Stars.
   */
  provider_token?: string

  /**
   * Required. Three-letter ISO 4217 currency code. Pass "XTR" for payments in Telegram Stars.
   */
  currency: string

  /**
   * Required. Price breakdown, a JSON-serialized list of components (e.g., product price, tax, discount, delivery cost, delivery tax, bonus, etc.).
   * Must contain exactly one item for payments in Telegram Stars.
   */
  prices: Array<LabeledPrice>

  /**
   * Optional. The number of seconds the subscription will be active for before the next payment.
   * Only valid for Telegram Stars payments and must always be 2592000 (30 days) if specified.
   */
  subscription_period?: number

  /**
   * Optional. The maximum accepted amount for tips in the smallest units of the currency.
   * Example: for a max tip of US$ 1.45, pass max_tip_amount = 145.
   */
  max_tip_amount?: number

  /**
   * Optional. A JSON-serialized array of suggested amounts of tips in the smallest units of the currency.
   * At most 4 suggested tip amounts can be specified. The amounts must be positive, strictly increasing,
   * and not exceed `max_tip_amount`.
   */
  suggested_tip_amounts?: number[]

  /**
   * Optional. JSON-serialized data about the invoice, shared with the payment provider.
   * Detailed description of required fields should be provided by the payment provider.
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
   * Optional. Pass `true` if you require the user's full name to complete the order.
   * Ignored for payments in Telegram Stars.
   */
  need_name?: boolean

  /**
   * Optional. Pass `true` if you require the user's phone number to complete the order.
   * Ignored for payments in Telegram Stars.
   */
  need_phone_number?: boolean

  /**
   * Optional. Pass `true` if you require the user's email address to complete the order.
   * Ignored for payments in Telegram Stars.
   */
  need_email?: boolean

  /**
   * Optional. Pass `true` if you require the user's shipping address to complete the order.
   * Ignored for payments in Telegram Stars.
   */
  need_shipping_address?: boolean

  /**
   * Optional. Pass `true` if the user's phone number should be sent to the provider.
   * Ignored for payments in Telegram Stars.
   */
  send_phone_number_to_provider?: boolean

  /**
   * Optional. Pass `true` if the user's email address should be sent to the provider.
   * Ignored for payments in Telegram Stars.
   */
  send_email_to_provider?: boolean

  /**
   * Optional. Pass `true` if the final price depends on the shipping method.
   * Ignored for payments in Telegram Stars.
   */
  is_flexible?: boolean
}
