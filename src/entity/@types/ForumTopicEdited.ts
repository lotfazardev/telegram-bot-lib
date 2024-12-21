/**
 * Represents a service message about an edited forum topic.
 *
 * This object is sent whenever a forum topic in a chat is edited. It provides details about the changes made to the topic, including the updated topic name and icon.
 *
 * @remarks
 * - The `name` field is optional and will be provided if the topic's name was edited.
 * - The `icon_custom_emoji_id` field is also optional and will be included if the icon has been changed. If the icon was removed, this field will contain an empty string.
 *
 * @example
 * ```typescript
 * const forumTopicEdited: ForumTopicEdited = {
 *   name: "Updated Discussion",
 *   icon_custom_emoji_id: "new_emoji_id"
 * };
 * ```
 * In this example, the forum topic's name is updated to "Updated Discussion" and the custom emoji icon is also changed.
 *
 * @see [Forum Topics Documentation](https://core.telegram.org/bots/api#forumtopicedited)
 */
export interface ForumTopicEdited {
  /**
   * Optional. The new name of the topic if it was edited.
   *
   * @example
   * "Updated Discussion"
   */
  name?: string

  /**
   * Optional. The new identifier of the custom emoji shown as the topic icon if it was edited.
   * An empty string indicates that the icon has been removed.
   *
   * @example
   * "new_emoji_id" // The new custom emoji ID after editing.
   *
   * @example
   * "" // The icon has been removed.
   */
  icon_custom_emoji_id?: string
}
