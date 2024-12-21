/**
 * Represents a background fill with a solid color.
 *
 * The background is filled using the selected color.
 *
 * @example
 * const backgroundFill: BackgroundFillSolid = {
 *   type: "solid",
 *   color: 0xFF5733, // RGB24 format
 * };
 */
export interface BackgroundFillSolid {
  /**
   * Type of the background fill, always "solid".
   */
  type: string

  /**
   * The color of the background fill in the RGB24 format.
   *
   * @example 0xFF5733 // Represents a solid red-orange color
   */
  color: number
}
