/**
 * Represents a time interval of business opening hours.
 */
export interface BusinessOpeningHoursInterval {
  /**
   * Opening time in minutes from midnight (00:00).
   */
  opening_minute: number

  /**
   * Closing time in minutes from midnight (00:00).
   */
  closing_minute: number
}
