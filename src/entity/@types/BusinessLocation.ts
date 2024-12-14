import { Location } from './Location'

/**
 * Represents a business location.
 *
 * @example
 * const businessLocation: BusinessLocation = {
 *   address: '123 Business St.',
 *   location: { Location details }
 * };
 */
export interface BusinessLocation {
  /**
   * The address of the business location.
   *
   * @example '123 Business St.'
   */
  address: string

  /**
   * Optional detailed location information.
   *
   * The `location` field can include geospatial data and other location-specific details.
   *
   * @see {@link Location} for the structure of the Location object.
   */
  location?: Location
}
