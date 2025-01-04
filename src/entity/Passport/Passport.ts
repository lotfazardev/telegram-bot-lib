import BaseTelegramApiEntity from '@core/BaseTelegramApiEntity'
import { SetPassportDataErrorsParams } from './@types/SetPassportDataErrorsParams'

export default class Passport extends BaseTelegramApiEntity {
  /**
   * Use this method to inform a user that some of the Telegram Passport elements they provided contain errors.
   * On success, returns true.
   */
  async setPassportDataErrors(setPassportDataErrorsParams: SetPassportDataErrorsParams) {
    return this.jsonCall<boolean>('setPassportDataErrors', setPassportDataErrorsParams)
  }
}
