import { InlineKeyboardMarkup } from '@entity/@types/InlineKeyboardMarkup'
import { LabeledPrice } from '@entity/@types/LabeledPrice'
import { ReplyParameters } from '@entity/@types/ReplyParameters'

/**
 * Represents the parameters required to send an invoice using the `sendInvoice` method.
 */
export interface SendInvoiceParams {
  /**
   * Required. Unique identifier for the target chat or username of the target channel
   * (in the format `@channelusername`).
   */
  chat_id: number | string

  /**
   * Optional. Unique identifier for the target message thread (topic) of the forum;
   * applicable for forum supergroups only.
   */
  message_thread_id?: number

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
   * Optional. Payment provider token, obtained via `@BotFather`. Pass an empty string
   * for payments in Telegram Stars.
   */
  provider_token?: string

  /**
   * Required. Three-letter ISO 4217 currency code. Pass "XTR" for payments in Telegram Stars.
   */
  currency: string

  /**
   * Required. Price breakdown, a JSON-serialized list of components (e.g., product price, tax, discount, etc.).
   * Must contain exactly one item for payments in Telegram Stars.
   */
  prices: Array<LabeledPrice>

  /**
   * Optional. The maximum accepted amount for tips in the smallest units of the currency.
   * For example, for a maximum tip of US$ 1.45 pass `max_tip_amount = 145`.
   */
  max_tip_amount?: number

  /**
   * Optional. A JSON-serialized array of suggested amounts of tips in the smallest units of the currency.
   * At most 4 suggested tip amounts can be specified. The amounts must be positive, strictly increasing,
   * and not exceed `max_tip_amount`.
   */
  suggested_tip_amounts?: number[]

  /**
   * Optional. Unique deep-linking parameter. If empty, forwarded copies of the sent message
   * will have a Pay button. If non-empty, forwarded copies will have a URL button linking to the bot.
   */
  start_parameter?: string

  /**
   * Optional. JSON-serialized data about the invoice, shared with the payment provider.
   * A detailed description of required fields should be provided by the payment provider.
   */
  provider_data?: string

  /**
   * Optional. URL of the product photo for the invoice. Can be a photo of the goods or
   * a marketing image for a service.
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

  /**
   * Optional. Sends the message silently. Users will receive a notification with no sound.
   */
  disable_notification?: boolean

  /**
   * Optional. Protects the contents of the sent message from forwarding and saving.
   */
  protect_content?: boolean

  /**
   * Optional. Pass `true` to allow up to 1000 messages per second, ignoring broadcasting limits
   * for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance.
   */
  allow_paid_broadcast?: boolean

  /**
   * Optional. Unique identifier of the message effect to be added to the message; for private chats only.
   */
  message_effect_id?: string

  /**
   * Optional. Description of the message to reply to.
   */
  reply_parameters?: ReplyParameters

  /**
   * Optional. A JSON-serialized object for an inline keyboard. If empty, one 'Pay total price' button
   * will be shown. If not empty, the first button must be a Pay button.
   */
  reply_markup?: InlineKeyboardMarkup
}
