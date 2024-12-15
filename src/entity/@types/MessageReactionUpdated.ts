import { Chat } from './Chat'
import { ReactionType } from './ReactionType'
import { User } from './User'

/**
 * Represents a change of a reaction on a message performed by a user.
 *
 * @see {@link Chat} for the chat model
 * @see {@link User} for the user model
 * @see {@link ReactionType} for the reaction types
 *
 * @example
 * const updatedReaction: MessageReactionUpdated = {
 *   chat: someChat,
 *   message_id: 12345,
 *   user: someUser,
 *   actor_chat: someActorChat,
 *   date: 1672531199,
 *   old_reaction: [ReactionType.Like],
 *   new_reaction: [ReactionType.Love],
 * };
 */
export interface MessageReactionUpdated {
  /**
   * The chat containing the message the user reacted to.
   *
   * @link {@link Chat}
   */
  chat: Chat

  /**
   * Unique identifier of the message inside the chat.
   */
  message_id: number

  /**
   * The user that changed the reaction, if the user isn't anonymous.
   *
   * @link {@link User}
   * @optional
   */
  user?: User

  /**
   * The chat on behalf of which the reaction was changed, if the user is anonymous.
   *
   * @link {@link Chat}
   * @optional
   */
  actor_chat?: Chat

  /**
   * Date of the change in Unix time.
   *
   * @example 1672531199
   */
  date: number

  /**
   * Previous list of reaction types that were set by the user.
   *
   * @link {@link ReactionType}
   * @example [ReactionType.Like]
   */
  old_reaction: ReactionType[]

  /**
   * New list of reaction types that have been set by the user.
   *
   * @link {@link ReactionType}
   * @example [ReactionType.Love]
   */
  new_reaction: ReactionType[]
}
