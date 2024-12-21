/**
 * Represents an issue in an unspecified place. The error is considered resolved when new data is added.
 *
 */
export interface PassportElementErrorUnspecified {
  /**
   * Error source, must be `unspecified`.
   */
  source: 'unspecified'

  /**
   * Type of element of the user's Telegram Passport which has the issue.
   */
  type: string

  /**
   * Base64-encoded element hash.
   */
  element_hash: string

  /**
   * Error message describing the issue.
   */
  message: string
}
