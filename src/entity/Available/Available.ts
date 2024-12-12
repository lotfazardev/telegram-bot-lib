import BaseTelegramApiEntity from '@core/BaseTelegramApiEntity'
import { User } from '../@types/User'

export default class Available extends BaseTelegramApiEntity {
  async getMe() {
    return this.apiAgent<User>({
      method: 'getMe',
    })
  }
}
