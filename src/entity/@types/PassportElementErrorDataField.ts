/**
 * Represents an issue in one of the data fields provided by the user.
 * The error is considered resolved when the field's value changes.
 *
 */
export interface PassportElementErrorDataField {
  /**
   * Error source, must be `data`.
   */
  source: 'data'

  /**
   * The section of the user's Telegram Passport that has the error.
   * One of “personal_details”, “passport”, “driver_license”, “identity_card”,
   * “internal_passport”, or “address”.
   */
  type:
    | 'personal_details'
    | 'passport'
    | 'driver_license'
    | 'identity_card'
    | 'internal_passport'
    | 'address'

  /**
   * Name of the data field which has the error.
   */
  field_name: string

  /**
   * Base64-encoded data hash.
   */
  data_hash: string

  /**
   * Error message describing the issue.
   */
  message: string
}
