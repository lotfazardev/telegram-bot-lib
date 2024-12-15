import { MessageEntity } from './MessageEntity'

/**
 * Represents the quoted part of a message that is replied to by the given message.
 */
export interface TextQuote {
  /** Text of the quoted part of a message */
  text: string

  /** Optional. Special entities in the quoted text
   *
   * @see {@link MessageEntity} for more details on entities like mentions, hashtags, and bot commands.
   */
  entities?: MessageEntity[]

  /** Approximate quote position in the original message (in UTF-16 code units) */
  position: number

  /** Optional. True if the quote was chosen manually by the sender */
  is_manual?: boolean
}
