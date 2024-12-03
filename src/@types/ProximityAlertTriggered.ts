import { User } from './User'

export interface ProximityAlertTriggered {
  traveler: User
  watcher: User
  distance: number
}
