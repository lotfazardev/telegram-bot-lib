import { BackgroundFill } from './BackgroundFill'

/**
 * Represents a background that is automatically filled based on the selected colors.
 *
 * The background is filled with a selected type of background fill and includes an optional dimming effect for dark themes.
 *
 * @see {@link BackgroundFill} for the background fill options
 *
 * @example
 * const background: BackgroundTypeFill = {
 *   type: "fill",
 *   fill: {
 *     type: "gradient",
 *     top_color: 0xFF5733,
 *     bottom_color: 0x33FF57,
 *     rotation_angle: 45,
 *   },
 *   dark_theme_dimming: 50, // 50% dimming in dark themes
 * };
 */
export interface BackgroundTypeFill {
  /**
   * Type of the background, always "fill".
   */
  type: string

  /**
   * The background fill.
   *
   * @link {@link BackgroundFill}
   */
  fill: BackgroundFill

  /**
   * Dimming of the background in dark themes, as a percentage.
   * Valid values range from 0 to 100, where 0 means no dimming and 100 means full dimming.
   *
   * @example 50 // 50% dimming in dark themes
   */
  dark_theme_dimming: number
}
