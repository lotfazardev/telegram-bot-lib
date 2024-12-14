/**
 * The reaction is based on a custom emoji.
 */
export interface ReactionTypeCustomEmoji {
  /**
   * Type of the reaction, always "custom_emoji".
   */
  type: 'custom_emoji'

  /**
   * Custom emoji identifier.
   * The ID represents a unique custom emoji used in the reaction.
   */
  custom_emoji_id: string
}
