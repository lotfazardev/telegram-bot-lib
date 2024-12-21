import { User } from './User'

/**
 * PaidMediaPurchased
 *
 * This object contains information about a paid media purchase.
 */
export interface PaidMediaPurchased {
  /**
   * User who purchased the media.
   */
  from: User

  /**
   * Bot-specified paid media payload.
   */
  paid_media_payload: string
}
