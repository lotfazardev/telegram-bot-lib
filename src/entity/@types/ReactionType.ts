import { ReactionTypeCustomEmoji } from './ReactionTypeCustomEmoji'
import { ReactionTypeEmoji } from './ReactionTypeEmoji'

/**
 * Type representing a reaction.
 * It can either be based on a predefined emoji or a custom emoji.
 */
export type ReactionType = ReactionTypeEmoji | ReactionTypeCustomEmoji
