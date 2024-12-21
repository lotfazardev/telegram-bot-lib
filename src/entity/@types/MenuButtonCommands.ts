/**
 * Represents a menu button that opens the bot's list of commands.
 * This button type allows users to access the list of available bot commands in a private chat.
 */
export interface MenuButtonCommands {
  /**
   * Type of the button, must be "commands".
   */
  type: 'commands'
}
