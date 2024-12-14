/**
 * This object represents a point on the map.
 */
export interface Location {
  /**
   * Latitude as defined by the sender.
   */
  latitude: number

  /**
   * Longitude as defined by the sender.
   */
  longitude: number

  /**
   * Optional. The radius of uncertainty for the location, measured in meters; 0-1500.
   */
  horizontal_accuracy?: number

  /**
   * Optional. Time relative to the message sending date, during which the location can be updated, in seconds.
   * Applicable for active live locations only.
   */
  live_period?: number

  /**
   * Optional. The direction in which the user is moving, in degrees; 1-360.
   * Applicable for active live locations only.
   */
  heading?: number

  /**
   * Optional. The maximum distance for proximity alerts about approaching another chat member, in meters.
   * Applicable for sent live locations only.
   */
  proximity_alert_radius?: number
}
