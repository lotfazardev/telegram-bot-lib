/**
 * Represents an issue with the reverse side of a document.
 * The error is considered resolved when the file with the reverse side of the document changes.
 *
 */
export interface PassportElementErrorReverseSide {
  /**
   * Error source, must be `reverse_side`.
   */
  source: 'reverse_side'

  /**
   * The section of the user's Telegram Passport which has the issue.
   * One of “driver_license” or “identity_card”.
   */
  type: 'driver_license' | 'identity_card'

  /**
   * Base64-encoded hash of the file with the reverse side of the document.
   */
  file_hash: string

  /**
   * Error message describing the issue.
   */
  message: string
}
