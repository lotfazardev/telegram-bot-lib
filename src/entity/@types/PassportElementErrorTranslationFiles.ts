/**
 * Represents an issue with the translated version of a document.
 * The error is considered resolved when a file with the document translation changes.
 *
 */
export interface PassportElementErrorTranslationFiles {
  /**
   * Error source, must be `translation_files`.
   */
  source: 'translation_files'

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
   * List of base64-encoded file hashes.
   */
  file_hashes: string[]

  /**
   * Error message describing the issue.
   */
  message: string
}
