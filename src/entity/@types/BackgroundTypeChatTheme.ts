/**
 * Represents a background taken directly from a built-in chat theme.
 *
 * The background is set according to a predefined chat theme, which is identified by the theme's name, often represented by an emoji.
 *
 * @example
 * const chatThemeBackground: BackgroundTypeChatTheme = {
 *   type: "chat_theme",
 *   theme_name: "🌞", // Example theme name (sun emoji)
 * };
 */
export interface BackgroundTypeChatTheme {
  /**
   * Type of the background, always "chat_theme".
   */
  type: string

  /**
   * Name of the chat theme, which is usually an emoji.
   *
   * @example "🌞" // Sun emoji representing the chat theme
   */
  theme_name: string
}
