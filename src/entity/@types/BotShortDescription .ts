/**
 * Represents the bot's short description.
 *
 * This object contains a brief description of the bot, typically used for summarizing the
 * bot's purpose or functionality in a concise manner.
 *
 * @example
 * const botShortDescription: BotShortDescription = {
 *   short_description: "A bot to manage your tasks and reminders." // The bot's short description
 * };
 */
export interface BotShortDescription {
  /**
   * The bot's short description.
   *
   * This field provides a brief and concise explanation of what the bot does or its purpose.
   *
   * @example "A bot to manage your tasks and reminders."
   */
  short_description: string
}
