import { InputContactMessageContent } from './InputContactMessageContent'
import { InputInvoiceMessageContent } from './InputInvoiceMessageContent'
import { InputLocationMessageContent } from './InputLocationMessageContent'
import { InputTextMessageContent } from './InputTextMessageContent'
import { InputVenueMessageContent } from './InputVenueMessageContent'

/**
 * This object represents the content of a message to be sent as a result of an inline query.
 * Telegram clients currently support the following types:
 * - InputTextMessageContent
 * - InputLocationMessageContent
 * - InputVenueMessageContent
 * - InputContactMessageContent
 * - InputInvoiceMessageContent
 */
export type InputMessageContent =
  | InputTextMessageContent
  | InputLocationMessageContent
  | InputVenueMessageContent
  | InputContactMessageContent
  | InputInvoiceMessageContent
