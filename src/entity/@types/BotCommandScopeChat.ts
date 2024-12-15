/**
 * Represents the scope of bot commands, covering a specific chat.
 *
 * This scope allows the bot commands to be applied specifically to one chat.
 *
 * @example
 * const botCommandScopeChat: BotCommandScopeChat = {
 *   type: "chat", // Scope type, always "chat"
 *   chat_id: 123456789 // Target chat ID
 * };
 */
export interface BotCommandScopeChat {
  /**
   * The type of the scope. Always set to "chat" for this scope.
   *
   */
  type: 'chat'

  /**
   * Unique identifier for the target chat or username of the target supergroup.
   * The chat ID can be either an integer (unique identifier) or a string (the username in the format "@supergroupusername").
   *
   * @example 123456789 // Target chat ID
   * @example "@supergroupusername" // Target supergroup username
   */
  chat_id: number | string
}
