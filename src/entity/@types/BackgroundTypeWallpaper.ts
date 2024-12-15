import { Document } from './Document'

/**
 * Represents a background in the form of a wallpaper, which is in the JPEG format.
 *
 * The background is set as a wallpaper, and it includes optional features like dimming for dark themes,
 * blurring effects, and movement when the device is tilted.
 *
 * @see {@link Document} for the document representing the wallpaper
 *
 * @example
 * const wallpaperBackground: BackgroundTypeWallpaper = {
 *   type: "wallpaper",
 *   document: someDocument, // Document with the wallpaper
 *   dark_theme_dimming: 50, // 50% dimming in dark themes
 *   is_blurred: true, // Wallpaper is blurred
 *   is_moving: false, // No movement when tilting the device
 * };
 */
export interface BackgroundTypeWallpaper {
  /**
   * Type of the background, always "wallpaper".
   */
  type: string

  /**
   * Document with the wallpaper in JPEG format.
   *
   * @link {@link Document}
   */
  document: Document

  /**
   * Dimming of the background in dark themes, as a percentage.
   * Valid values range from 0 to 100, where 0 means no dimming and 100 means full dimming.
   *
   * @example 50 // 50% dimming in dark themes
   */
  dark_theme_dimming: number

  /**
   * Whether the wallpaper is downscaled to fit in a 450x450 square and then box-blurred with a radius of 12.
   * This property is optional.
   *
   * @example true // Wallpaper is blurred
   */
  is_blurred?: boolean

  /**
   * Whether the wallpaper moves slightly when the device is tilted.
   * This property is optional.
   *
   * @example true // Wallpaper moves when tilting the device
   */
  is_moving?: boolean
}
