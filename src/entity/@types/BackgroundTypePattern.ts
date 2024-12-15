import { Document } from './Document'
import { BackgroundFill } from './BackgroundFill'

/**
 * Represents a background that combines a pattern (PNG or TGV) with the selected background fill.
 *
 * The pattern is either in PNG or TGV format (gzipped SVG) and is used in combination with the chosen background fill.
 * Optional properties like intensity, inversion for dark themes, and movement when tilting the device can be applied.
 *
 * @see {@link Document} for the document representing the pattern
 * @see {@link BackgroundFill} for the background fill options
 *
 * @example
 * const patternBackground: BackgroundTypePattern = {
 *   type: "pattern",
 *   document: somePatternDocument, // Document with the PNG or TGV pattern
 *   fill: {
 *     type: "solid",
 *     color: 0xFF5733, // RGB24 format for solid color
 *   },
 *   intensity: 80, // Intensity of the pattern
 *   is_inverted: false, // No inversion for the pattern
 *   is_moving: true, // Wallpaper moves when tilting the device
 * };
 */
export interface BackgroundTypePattern {
  /**
   * Type of the background, always "pattern".
   */
  type: string

  /**
   * Document with the pattern in PNG or TGV format.
   *
   * @link {@link Document}
   */
  document: Document

  /**
   * The background fill that is combined with the pattern.
   *
   * @link {@link BackgroundFill}
   */
  fill: BackgroundFill

  /**
   * Intensity of the pattern when it is shown above the filled background.
   * Valid values range from 0 to 100, where 0 means no visible pattern and 100 means full intensity.
   *
   * @example 80 // Pattern is shown with 80% intensity
   */
  intensity: number

  /**
   * Whether the background fill must be applied only to the pattern itself.
   * In this case, all other pixels are black. This is for dark themes only.
   * This property is optional.
   *
   * @example true // Fill only applied to the pattern for dark themes
   */
  is_inverted?: boolean

  /**
   * Whether the background moves slightly when the device is tilted.
   * This property is optional.
   *
   * @example true // Pattern moves when tilting the device
   */
  is_moving?: boolean
}
