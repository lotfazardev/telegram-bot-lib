import { PaidMedia } from './PaidMedia'

/**
 * Describes the paid media added to a message.
 */
export interface PaidMediaInfo {
  /**
   * The number of Telegram Stars that must be paid to buy access to the media.
   */
  star_count: number

  /**
   * Information about the paid media.
   * -@see {@link PaidMedia}
   */
  paid_media: PaidMedia[]
}
