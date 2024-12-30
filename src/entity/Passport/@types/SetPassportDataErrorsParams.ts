import { PassportElementError } from '@entity/@types/PassportElementError'

/**
 * Represents the parameters required to set passport data errors for a user.
 */
export interface SetPassportDataErrorsParams {
  /**
   * Required. User identifier.
   */
  user_id: number

  /**
   * Required. A JSON-serialized array of PassportElementError objects describing the errors.
   */
  errors: PassportElementError[]
}
