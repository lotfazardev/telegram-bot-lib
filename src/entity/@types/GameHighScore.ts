import { User } from './User'

/**
 * This object represents one row of the high scores table for a game.
 *
 */
export interface GameHighScore {
  /**
   * Position in the high score table for the game.
   *
   * @example 1
   */
  position: number

  /**
   * User associated with this high score entry.
   *
   * @see {@link User}
   */
  user: User

  /**
   * Score achieved by the user.
   *
   * @example 12345
   */
  score: number
}
