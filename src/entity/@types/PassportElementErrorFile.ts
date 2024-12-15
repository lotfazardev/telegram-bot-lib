/**
 * Represents an issue with a document scan.
 * The error is considered resolved when the file with the document scan changes.
 *
 */
export interface PassportElementErrorFile {
  /**
   * Error source, must be `file`.
   */
  source: 'file'

  /**
   * The section of the user's Telegram Passport which has the issue.
   * One of “utility_bill”, “bank_statement”, “rental_agreement”,
   * “passport_registration”, or “temporary_registration”.
   */
  type:
    | 'utility_bill'
    | 'bank_statement'
    | 'rental_agreement'
    | 'passport_registration'
    | 'temporary_registration'

  /**
   * Base64-encoded hash of the file with the document scan.
   */
  file_hash: string

  /**
   * Error message describing the issue.
   */
  message: string
}
