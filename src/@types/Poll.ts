import { MessageEntity } from './MessageEntity'
import { PollOption } from './PollOption'

/**
 * This object contains information about a poll.
 */
export interface Poll {
  /**
   * Unique poll identifier.
   *
   * @example "523abf78-d0a5-4cfa-9e68-789b3ecab90c"
   */
  id: string

  /**
   * Poll question, 1-300 characters.
   *
   * @example "What is your favorite programming language?"
   */
  question: string

  /**
   * List of poll options.
   * -@see {@link PollOption}
   */
  options: PollOption[]

  /**
   * Total number of users that voted in the poll.
   *
   * @example 154
   */
  total_voter_count: number

  /**
   * `true` if the poll is closed.
   */
  is_closed: boolean

  /**
   * `true` if the poll is anonymous.
   */
  is_anonymous: boolean

  /**
   * Poll type, can be either "regular" or "quiz".
   *
   * @example "quiz"
   */
  type: 'regular' | 'quiz'

  /**
   * `true` if the poll allows multiple answers.
   */
  allows_multiple_answers: boolean

  /**
   * *Optional*. 0-based identifier of the correct answer option.
   * Available only for quiz polls that are closed or sent by the bot.
   *
   * @example 2
   */
  correct_option_id?: number

  /**
   * *Optional*. Text shown for incorrect answers or when a user taps on the hint in quiz-style polls, 0-200 characters.
   *
   * @example "Hint: Think about simplicity and readability."
   */
  explanation?: string

  /**
   * *Optional*. Special entities that appear in the explanation, such as usernames or URLs.
   * -@see {@link MessageEntity}
   */
  explanation_entities?: MessageEntity[]

  /**
   * *Optional*. Amount of time in seconds the poll will be active after creation.
   *
   * @example 3600
   */
  open_period?: number

  /**
   * *Optional*. Unix timestamp when the poll will be automatically closed.
   *
   * @example 1719873600
   */
  close_date?: number
}
