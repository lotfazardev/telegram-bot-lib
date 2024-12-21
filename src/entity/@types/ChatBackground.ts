import { BackgroundType } from './BackgroundType'

/**
 * Represents a chat background.
 *
 * This object defines the type of background used in a chat. The background can be set using different types such as a solid color, gradient, image, or other predefined themes.
 *
 * @see {@link BackgroundType} for different background types that can be applied.
 *
 * @example
 * const chatBackground: ChatBackground = {
 *   type: {
 *     type: "solid",
 *     color: 0xFF5733, // RGB24 format for solid color
 *   },
 * };
 */
export interface ChatBackground {
  /**
   * Type of the background.
   *
   * @link {@link BackgroundType}
   */
  type: BackgroundType
}
