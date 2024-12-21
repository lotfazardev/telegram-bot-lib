import { PhotoSize } from './PhotoSize'
import { Sticker } from './Sticker'

/**
 * This object represents a sticker set.
 */
export interface StickerSet {
  /**
   * Sticker set name.
   * Must be unique.
   */
  name: string

  /**
   * Sticker set title.
   * A human-readable title for the set.
   */
  title: string

  /**
   * Type of stickers in the set, currently one of “regular”, “mask”, “custom_emoji”.
   */
  sticker_type: 'regular' | 'mask' | 'custom_emoji'

  /**
   * List of all set stickers.
   */
  stickers: Sticker[]

  /**
   * Optional. Sticker set thumbnail in the .WEBP, .TGS, or .WEBM format.
   */
  thumbnail?: PhotoSize
}
