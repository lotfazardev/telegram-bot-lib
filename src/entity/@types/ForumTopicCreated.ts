/**
 * Represents a service message about a new forum topic created in the chat.
 *
 * This object is sent whenever a new forum topic is created within a chat. It provides information about the topic's name, icon color, and optionally, a custom emoji used as the topic's icon.
 *
 * @remarks
 * - The `icon_color` is represented in RGB format, allowing the bot to set a specific color for the topic icon.
 * - The `icon_custom_emoji_id` is optional and represents the unique identifier of a custom emoji that can be used as a topic icon, providing more flexibility for the appearance of the forum topic.
 *
 * @example
 * ```typescript
 * const forumTopicCreated: ForumTopicCreated = {
 *   name: "General Discussion",
 *   icon_color: 0xFF5733, // RGB color code
 *   icon_custom_emoji_id: "emoji_id_example"
 * };
 * ```
 * This example creates a forum topic named "General Discussion" with a specific icon color and a custom emoji for the icon.
 *
 * @see [Forum Topics Documentation](https://core.telegram.org/bots/api#forumtopiccreated)
 */
export interface ForumTopicCreated {
  /**
   * The name of the topic.
   */
  name: string

  /**
   * The color of the topic icon in RGB format.
   * The color is represented as an integer, where each byte corresponds to a color channel (Red, Green, Blue).
   *
   * @example
   * 0xFF5733 // RGB Color (Red: 255, Green: 87, Blue: 51)
   */
  icon_color: number

  /**
   * Optional. The unique identifier of the custom emoji shown as the topic icon.
   * This allows using custom emojis as topic icons in a forum.
   *
   * @example
   * "emoji_id_example" // Unique identifier for the custom emoji.
   */
  icon_custom_emoji_id?: string
}
