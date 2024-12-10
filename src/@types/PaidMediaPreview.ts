/**
 * Represents a preview of paid media, available before payment.
 */
export interface PaidMediaPreview {
  /**
   * The type of the paid media preview. Always has the value "preview".
   *
   * @example
   * "preview"
   */
  type: 'preview'

  /**
   * The width of the media as defined by the sender.
   * Optional.
   *
   * @example
   * 1920
   */
  width?: number

  /**
   * The height of the media as defined by the sender.
   * Optional.
   *
   * @example
   * 1080
   */
  height?: number

  /**
   * The duration of the media in seconds as defined by the sender.
   * Optional.
   *
   * @example
   * 120
   */
  duration?: number
}
