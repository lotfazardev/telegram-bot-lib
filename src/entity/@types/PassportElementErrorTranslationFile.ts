/**
 * Represents an issue with one of the files that constitute the translation of a document.
 * The error is considered resolved when the file changes.
 *
 */
export interface PassportElementErrorTranslationFile {
  /**
   * Error source, must be `translation_file`.
   */
  source: 'translation_file'

  /**
   * Type of element of the user's Telegram Passport which has the issue.
   * One of “passport”, “driver_license”, “identity_card”, “internal_passport”,
   * “utility_bill”, “bank_statement”, “rental_agreement”, “passport_registration”, or “temporary_registration”.
   */
  type:
    | 'passport'
    | 'driver_license'
    | 'identity_card'
    | 'internal_passport'
    | 'utility_bill'
    | 'bank_statement'
    | 'rental_agreement'
    | 'passport_registration'
    | 'temporary_registration'

  /**
   * Base64-encoded file hash.
   */
  file_hash: string

  /**
   * Error message describing the issue.
   */
  message: string
}
