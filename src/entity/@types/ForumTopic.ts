/**
 * Represents a forum topic.
 *
 * This object is used to define the properties of a forum topic, including the unique identifier, name, icon color,
 * and an optional custom emoji as the topic's icon.
 *
 * @example
 * const forumTopic: ForumTopic = {
 *   message_thread_id: 123456,
 *   name: "Technology Discussions",
 *   icon_color: 0xFF5733, // RGB color format for the icon
 *   icon_custom_emoji_id: "emoji_1234", // Optional custom emoji ID
 * };
 */
export interface ForumTopic {
  /**
   * Unique identifier of the forum topic.
   */
  message_thread_id: number

  /**
   * Name of the topic.
   */
  name: string

  /**
   * Color of the topic icon in RGB format.
   *
   * @example 0xFF5733 // RGB color representation
   */
  icon_color: number

  /**
   * Unique identifier of the custom emoji shown as the topic icon.
   *
   * This field is optional.
   *
   * @example "emoji_1234" // Unique emoji identifier if a custom emoji is used
   */
  icon_custom_emoji_id?: string
}
