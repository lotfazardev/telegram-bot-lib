import { User } from './User'

/**
 * Represents the content of a service message, sent whenever a user in the chat triggers a proximity alert set by another user.
 */
export interface ProximityAlertTriggered {
  /**
   * The user who triggered the proximity alert.
   * - {@link User} - Represents the user that triggered the alert.
   */
  traveler: User

  /**
   * The user who set the proximity alert.
   * - {@link User} - Represents the user who set the alert.
   */
  watcher: User

  /**
   * The distance between the users.
   * - {@link Number} - The distance (in meters) between the user who triggered the alert and the user who set it.
   */
  distance: number
}
