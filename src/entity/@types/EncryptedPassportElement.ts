import { EncryptedPassportElementType } from './EncryptedPassportElementType'
import { PassportFile } from './PassportFile'

/**
 * Describes documents or other Telegram Passport elements shared with the bot by the user.
 *
 */
export interface EncryptedPassportElement {
  /**
   * Element type.
   *
   * @see {@link EncryptedPassportElementType}
   */
  type: EncryptedPassportElementType

  /**
   * Optional. Base64-encoded encrypted Telegram Passport element data provided by the user.
   * Available only for the following types:
   * - "personal_details"
   * - "passport"
   * - "driver_license"
   * - "identity_card"
   * - "internal_passport"
   * - "address"
   *
   * Can be decrypted and verified using the accompanying EncryptedCredentials.
   *
   * @example "QmFzZTY0RW5jb2RlZEVuY3J5cHRlZERhdGE="
   */
  data?: string

  /**
   * Optional. User's verified phone number.
   * Available only for the "phone_number" type.
   *
   * @example "+123456789"
   */
  phone_number?: string

  /**
   * Optional. User's verified email address.
   * Available only for the "email" type.
   *
   * @example "user@example.com"
   */
  email?: string

  /**
   * Optional. Array of encrypted files with documents provided by the user.
   * Available only for the following types:
   * - "utility_bill"
   * - "bank_statement"
   * - "rental_agreement"
   * - "passport_registration"
   * - "temporary_registration"
   *
   * Files can be decrypted and verified using the accompanying EncryptedCredentials.
   *
   * @see {@link PassportFile}
   */
  files?: PassportFile[]

  /**
   * Optional. Encrypted file with the front side of the document, provided by the user.
   * Available only for the following types:
   * - "passport"
   * - "driver_license"
   * - "identity_card"
   * - "internal_passport"
   *
   * The file can be decrypted and verified using the accompanying EncryptedCredentials.
   *
   * @see {@link PassportFile}
   */
  front_side?: PassportFile

  /**
   * Optional. Encrypted file with the reverse side of the document, provided by the user.
   * Available only for the following types:
   * - "driver_license"
   * - "identity_card"
   *
   * The file can be decrypted and verified using the accompanying EncryptedCredentials.
   *
   * @see {@link PassportFile}
   */
  reverse_side?: PassportFile

  /**
   * Optional. Encrypted file with the selfie of the user holding a document, provided by the user.
   * Available if requested for the following types:
   * - "passport"
   * - "driver_license"
   * - "identity_card"
   * - "internal_passport"
   *
   * The file can be decrypted and verified using the accompanying EncryptedCredentials.
   *
   * @see {@link PassportFile}
   */
  selfie?: PassportFile

  /**
   * Optional. Array of encrypted files with translated versions of documents provided by the user.
   * Available if requested for the following types:
   * - "passport"
   * - "driver_license"
   * - "identity_card"
   * - "internal_passport"
   * - "utility_bill"
   * - "bank_statement"
   * - "rental_agreement"
   * - "passport_registration"
   * - "temporary_registration"
   *
   * Files can be decrypted and verified using the accompanying EncryptedCredentials.
   *
   * @see {@link PassportFile}
   */
  translation?: PassportFile[]

  /**
   * Base64-encoded element hash for use in PassportElementErrorUnspecified.
   *
   * @example "QmFzZTY0RW5jb2RlZEhhc2g="
   */
  hash: string
}
