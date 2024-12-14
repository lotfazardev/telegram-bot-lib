import { ReactionType } from './ReactionType'

/**
 * Represents a reaction added to a message along with the number of times it was added.
 *
 * @see {@link ReactionType} for details about the possible reaction types.
 */
export interface ReactionCount {
  /**
   * Type of the reaction.
   *
   * @see {@link ReactionType} for the possible reaction types.
   */
  type: ReactionType

  /**
   * Number of times the reaction was added.
   */
  total_count: number
}
