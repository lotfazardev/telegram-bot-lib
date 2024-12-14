/**
 * Describes the birthdate of a user.
 */
export interface Birthdate {
  /**
   * Day of the user's birth; a value between 1 and 31.
   */
  day: number

  /**
   * Month of the user's birth; a value between 1 and 12.
   */
  month: number

  /**
   * Optional. Year of the user's birth.
   */
  year?: number
}
