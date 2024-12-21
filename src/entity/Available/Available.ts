import BaseTelegramApiEntity from '@core/BaseTelegramApiEntity'
import { User } from '../@types/User'
import { GetUserProfilePhotosParams } from './getUserProfilePhotosParams'
import { UserProfilePhotos } from '@entity/@types/UserProfilePhotos'

export default class Available extends BaseTelegramApiEntity {
  async getMe() {
    return this.apiAgent<User>({
      method: 'getMe',
    })
  }
  async getUserProfilePhotos(getUserProfilePhotosParams: GetUserProfilePhotosParams) {
    return this.apiAgent<UserProfilePhotos>({
      method: 'getUserProfilePhotos',
      options: { body: JSON.stringify(getUserProfilePhotosParams) },
    })
  }
}
