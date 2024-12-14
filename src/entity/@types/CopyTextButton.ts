/**
 * Represents an inline keyboard button that copies specified text to the clipboard.
 *
 * @remarks
 * This button allows users to copy predefined text (1-256 characters) directly to their clipboard. It can be used in a wide variety of interactive user interfaces, especially in chat bots or web applications where users might need to copy specific information.
 *
 * @example
 * ```typescript
 * const button: CopyTextButton = {
 *   text: "Copy this text to clipboard"
 * };
 * // When this button is clicked, it copies the text to the clipboard.
 * ```
 */
export interface CopyTextButton {
  /**
   * The text to be copied to the clipboard. Must be between 1 and 256 characters.
   *
   * @example
   * "Click to copy this message"
   */
  text: string
}
