/**
 * Represents a freeform gradient background fill that rotates after every message in the chat.
 *
 * The background consists of 3 or 4 base colors that are used to generate the freeform gradient, which rotates with each message.
 *
 * @example
 * const backgroundFreeformGradient: BackgroundFillFreeformGradient = {
 *   type: "freeform_gradient",
 *   colors: [0xFF5733, 0x33FF57, 0x3357FF], // RGB24 format for the 3 base colors
 * };
 */
export interface BackgroundFillFreeformGradient {
  /**
   * Type of the background fill, always "freeform_gradient".
   */
  type: string

  /**
   * A list of the 3 or 4 base colors that are used to generate the freeform gradient in the RGB24 format.
   *
   * @example [0xFF5733, 0x33FF57, 0x3357FF] // Represents 3 base colors: red, green, and blue
   */
  colors: number[]
}
