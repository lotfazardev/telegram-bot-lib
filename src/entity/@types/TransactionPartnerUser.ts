import { User } from './User'
import { AffiliateInfo } from './AffiliateInfo'
import { PaidMedia } from './PaidMedia'
import { Gift } from './Gift'

/**
 * Describes a transaction with a user.
 */
export interface TransactionPartnerUser {
  /**
   * Type of the transaction partner, always "user".
   */
  type: 'user'

  /**
   * Information about the user.
   */
  user: User

  /**
   * Optional. Information about the affiliate that received a commission via this transaction.
   */
  affiliate?: AffiliateInfo

  /**
   * Optional. Bot-specified invoice payload.
   */
  invoice_payload?: string

  /**
   * Optional. The duration of the paid subscription.
   */
  subscription_period?: number

  /**
   * Optional. Information about the paid media bought by the user.
   */
  paid_media?: PaidMedia[]

  /**
   * Optional. Bot-specified paid media payload.
   */
  paid_media_payload?: string

  /**
   * Optional. The gift sent to the user by the bot.
   */
  gift?: Gift
}
