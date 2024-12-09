import { BaseTelegramAPI } from '../../core/base-telegram-api'

export class Passport extends BaseTelegramAPI {
  async getPassportData(payload: { user_id: number }) {
    return this.callTelegramMethod('getPassportData', payload)
  }
}
