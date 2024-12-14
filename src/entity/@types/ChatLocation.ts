import { Location } from './Location'

/**
 * Represents a location to which a chat (supergroup) is connected.
 */
export interface ChatLocation {
  /**
   * The location to which the supergroup is connected.
   * It cannot be a live location.
   */
  location: Location

  /**
   * The address of the location (1-64 characters), as defined by the chat owner.
   */
  address: string
}
