import { Chat } from './Chat'
import { User } from './User'

/**
 * This object represents an answer from a user in a non-anonymous poll.
 */
export interface PollAnswer {
  /**
   * Unique poll identifier.
   *
   * @example "523abf78-d0a5-4cfa-9e68-789b3ecab90c"
   */
  poll_id: string

  /**
   * *Optional*. The chat where the answer was changed, if the voter is anonymous.
   * -@see {@link Chat}
   */
  voter_chat?: Chat

  /**
   * *Optional*. The user who changed their answer, if the voter is not anonymous.
   * -@see {@link User}
   */
  user?: User

  /**
   * Array of 0-based identifiers of chosen answer options.
   * May be empty if the vote was retracted.
   *
   * @example [0, 2]
   */
  option_ids: number[]
}
