import { Sticker } from './Sticker'

/**
 * This object represents a gift that can be sent by the bot.
 */
export interface Gift {
  /**
   * Unique identifier of the gift.
   */
  id: string

  /**
   * The sticker that represents the gift.
   */
  sticker: Sticker

  /**
   * The number of Telegram Stars that must be paid to send the sticker.
   */
  star_count: number

  /**
   * Optional. The total number of the gifts of this type that can be sent; for limited gifts only.
   */
  total_count?: number

  /**
   * Optional. The number of remaining gifts of this type that can be sent; for limited gifts only.
   */
  remaining_count?: number
}