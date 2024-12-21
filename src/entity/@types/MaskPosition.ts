/**
 * Represents the position of a mask on a face.
 */
export interface MaskPosition {
  /**
   * The part of the face relative to which the mask should be placed.
   * One of “forehead”, “eyes”, “mouth”, or “chin”.
   */
  point: 'forehead' | 'eyes' | 'mouth' | 'chin'

  /**
   * Shift by X-axis measured in widths of the mask scaled to the face size.
   * Example: -1.0 will place the mask just to the left of the default position.
   */
  x_shift: number

  /**
   * Shift by Y-axis measured in heights of the mask scaled to the face size.
   * Example: 1.0 will place the mask just below the default position.
   */
  y_shift: number

  /**
   * Mask scaling coefficient.
   * Example: 2.0 means double size.
   */
  scale: number
}
