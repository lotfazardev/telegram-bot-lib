/**
 * Represents the content of a location message to be sent as the result of an inline query.
 */
export interface InputLocationMessageContent {
  /**
   * Latitude of the location in degrees.
   */
  latitude: number

  /**
   * Longitude of the location in degrees.
   */
  longitude: number

  /**
   * Optional. The radius of uncertainty for the location, measured in meters; must be between 0 and 1500.
   */
  horizontal_accuracy?: number

  /**
   * Optional. Period in seconds during which the location can be updated.
   * Should be between 60 and 86400, or 0x7FFFFFFF for live locations that can be edited indefinitely.
   */
  live_period?: number

  /**
   * Optional. For live locations, a direction in which the user is moving, in degrees.
   * Must be between 1 and 360 if specified.
   */
  heading?: number

  /**
   * Optional. For live locations, a maximum distance for proximity alerts about approaching
   * another chat member, in meters. Must be between 1 and 100000 if specified.
   */
  proximity_alert_radius?: number
}
