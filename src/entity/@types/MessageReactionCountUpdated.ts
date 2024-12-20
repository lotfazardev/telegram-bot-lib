import { Chat } from './Chat'
import { ReactionCount } from './ReactionCount'

/**
 * Represents reaction changes on a message with anonymous reactions.
 *
 * This object is used to track changes in reactions to a message in a chat, specifically when the reactions are anonymous.
 * The reactions are represented as counts of the different reaction types that have been applied to the message.
 *
 * @see {@link Chat} for the chat containing the message
 * @see {@link ReactionCount} for the structure of individual reaction counts
 *
 * @example
 * const reactionUpdate: MessageReactionCountUpdated = {
 *   chat: someChat, // The chat where the message is located
 *   message_id: 123456, // Unique identifier for the message
 *   date: 1678765412, // Date of the change in Unix time
 *   reactions: [
 *     { reaction: "👍", count: 10 }, // 10 thumbs up reactions
 *     { reaction: "❤️", count: 5 }, // 5 heart reactions
 *   ],
 * };
 */
export interface MessageReactionCountUpdated {
  /**
   * The chat containing the message the reactions belong to.
   *
   * @link {@link Chat}
   */
  chat: Chat

  /**
   * Unique identifier of the message inside the chat.
   */
  message_id: number

  /**
   * Date of the reaction change in Unix time (seconds since Jan 1, 1970).
   *
   * @example 1678765412 // Unix timestamp representing the change date
   */
  date: number

  /**
   * List of reactions present on the message, represented by counts of each reaction type.
   *
   * @link {@link ReactionCount}
   */
  reactions: ReactionCount[]
}
