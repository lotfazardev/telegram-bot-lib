/**
 * Represents a background fill with a gradient.
 *
 * The background is a gradient fill with customizable top and bottom colors, as well as a rotation angle.
 *
 * @example
 * const backgroundGradient: BackgroundFillGradient = {
 *   type: "gradient",
 *   top_color: 0xFF5733, // RGB24 format for top color (red-orange)
 *   bottom_color: 0x33FF57, // RGB24 format for bottom color (green)
 *   rotation_angle: 45, // 45-degree clockwise rotation
 * };
 */
export interface BackgroundFillGradient {
  /**
   * Type of the background fill, always "gradient".
   */
  type: string

  /**
   * Top color of the gradient in the RGB24 format.
   *
   * @example 0xFF5733 // Represents a red-orange color
   */
  top_color: number

  /**
   * Bottom color of the gradient in the RGB24 format.
   *
   * @example 0x33FF57 // Represents a green color
   */
  bottom_color: number

  /**
   * Clockwise rotation angle of the background fill in degrees.
   * Values can range from 0 to 359.
   *
   * @example 45 // 45 degrees clockwise rotation
   */
  rotation_angle: number
}
