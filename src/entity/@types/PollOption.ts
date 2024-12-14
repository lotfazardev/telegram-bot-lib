import { MessageEntity } from './MessageEntity'

/**
 * This object contains information about one answer option in a poll.
 */
export interface PollOption {
  /**
   * The text of the option, with a limit of 1-100 characters.
   */
  text: string

  /**
   * *Optional*. Special entities that appear in the option text.
   * Currently, only custom emoji entities are allowed in poll option texts.
   * -@see {@link MessageEntity}
   */
  text_entities?: MessageEntity[]

  /**
   * The number of users who voted for this option.
   */
  voter_count: number
}
