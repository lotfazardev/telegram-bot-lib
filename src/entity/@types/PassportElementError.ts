import { PassportElementErrorDataField } from './PassportElementErrorDataField'
import { PassportElementErrorFile } from './PassportElementErrorFile'
import { PassportElementErrorFiles } from './PassportElementErrorFiles'
import { PassportElementErrorFrontSide } from './PassportElementErrorFrontSide'
import { PassportElementErrorReverseSide } from './PassportElementErrorReverseSide'
import { PassportElementErrorSelfie } from './PassportElementErrorSelfie'
import { PassportElementErrorTranslationFile } from './PassportElementErrorTranslationFile'
import { PassportElementErrorTranslationFiles } from './PassportElementErrorTranslationFiles'
import { PassportElementErrorUnspecified } from './PassportElementErrorUnspecified'

/**
 * Represents an error in the Telegram Passport element which was submitted that should be resolved by the user.
 * This can be one of the following error types:
 * - PassportElementErrorDataField
 * - PassportElementErrorFrontSide
 * - PassportElementErrorReverseSide
 * - PassportElementErrorSelfie
 * - PassportElementErrorFile
 * - PassportElementErrorFiles
 * - PassportElementErrorTranslationFile
 * - PassportElementErrorTranslationFiles
 * - PassportElementErrorUnspecified
 *
 */
export type PassportElementError =
  | PassportElementErrorDataField
  | PassportElementErrorFrontSide
  | PassportElementErrorReverseSide
  | PassportElementErrorSelfie
  | PassportElementErrorFile
  | PassportElementErrorFiles
  | PassportElementErrorTranslationFile
  | PassportElementErrorTranslationFiles
  | PassportElementErrorUnspecified
