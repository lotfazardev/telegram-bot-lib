import { Sticker } from './Sticker'

/**
 * Contains information about the start page settings of a Telegram Business account.
 */
export interface BusinessIntro {
  /**
   * Optional. Title text of the business intro.
   */
  title?: string

  /**
   * Optional. Message text of the business intro.
   */
  message?: string

  /**
   * Optional. Sticker of the business intro.
   * See {@link Sticker} for more details.
   */
  sticker?: Sticker
}
