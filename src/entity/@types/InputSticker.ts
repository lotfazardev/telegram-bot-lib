import { MaskPosition } from './MaskPosition'
import { SendFile } from './SendFile'

/**
 * Represents a sticker to be added to a sticker set.
 */
export interface InputSticker {
  /**
   * The added sticker. It can be:
   * - A file ID (String) to send a file already on Telegram servers.
   * - An HTTP URL (String) for Telegram to fetch the file from the internet.
   * - A new file uploaded via multipart/form-data.
   * - “attach://<file_attach_name>” for multipart file upload under <file_attach_name>.
   * Animated and video stickers cannot be uploaded via HTTP URL.
   */
  sticker: SendFile

  /**
   * The format of the added sticker.
   * - "static" for a .WEBP or .PNG image.
   * - "animated" for a .TGS animation.
   * - "video" for a WEBM video.
   */
  format: 'static' | 'animated' | 'video'

  /**
   * List of 1-20 emojis associated with the sticker.
   * Used for searching and relating emojis to the sticker.
   */
  emoji_list: string[]

  /**
   * Optional. Position on the face where the mask should be placed.
   * This is applicable only for "mask" stickers.
   */
  mask_position?: MaskPosition

  /**
   * Optional. List of 0-20 search keywords (up to 64 characters in total).
   * Only for “regular” and “custom_emoji” stickers.
   */
  keywords?: string[]
}
