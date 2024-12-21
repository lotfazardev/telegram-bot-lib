/**
 * Describes a transaction with payment for paid broadcasting.
 */
export interface TransactionPartnerTelegramApi {
  /**
   * Type of the transaction partner, always "telegram_api".
   */
  type: 'telegram_api'

  /**
   * The number of successful requests that exceeded regular limits and were therefore billed.
   */
  request_count: number
}
