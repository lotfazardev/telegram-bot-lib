/**
 * Represents a bot command.
 *
 * This object is used to define a bot command with its command text and description.
 * The command can contain lowercase English letters, digits, and underscores, while the description provides
 * a brief explanation of the command's functionality.
 *
 * @example
 * const botCommand: BotCommand = {
 *   command: "start_bot", // Command text (1-32 characters)
 *   description: "Starts the bot and initializes the main process", // Description (1-256 characters)
 * };
 */
export interface BotCommand {
  /**
   * Text of the command.
   * Must be between 1 and 32 characters, and can only contain lowercase English letters, digits, and underscores.
   *
   * @example "start_bot" // Valid command text
   */
  command: string

  /**
   * Description of the command.
   * Must be between 1 and 256 characters long.
   *
   * @example "Starts the bot and initializes the main process" // Example description
   */
  description: string
}
