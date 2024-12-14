import { Location } from './Location'

/**
 * This object represents a venue.
 * A venue is a location with additional details like a name and address.
 */
export interface Venue {
  /**
   * Venue location. Cannot be a live location.
   * -@see {@link Location}
   */
  location: Location

  /**
   * Name of the venue.
   */
  title: string

  /**
   * Address of the venue.
   */
  address: string

  /**
   * Optional. Foursquare identifier of the venue.
   */
  foursquare_id?: string

  /**
   * Optional. Foursquare type of the venue.
   * Examples: "arts_entertainment/default", "arts_entertainment/aquarium", "food/icecream".
   */
  foursquare_type?: string

  /**
   * Optional. Google Places identifier of the venue.
   */
  google_place_id?: string

  /**
   * Optional. Google Places type of the venue.
   * Refer to Google Places supported types: https://developers.google.com/places/web-service/supported_types
   */
  google_place_type?: string
}
