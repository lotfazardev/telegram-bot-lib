import { BusinessOpeningHoursInterval } from './BusinessOpeningHoursInterval'

/**
 * Describes the opening hours of a business.
 */
export interface BusinessOpeningHours {
  /**
   * The unique name of the time zone for which the opening hours are defined.
   */
  time_zone_name: string

  /**
   * List of time intervals describing the business opening hours.
   * @see {@link BusinessOpeningHoursInterval} for the intervals format.
   */
  opening_hours: BusinessOpeningHoursInterval[]
}
