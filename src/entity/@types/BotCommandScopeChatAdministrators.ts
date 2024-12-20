/**
 * Represents the scope of bot commands, covering all administrators of a specific group or supergroup chat.
 *
 * This scope allows bot commands to be applied to all administrators within a group or supergroup chat.
 *
 * @example
 * const botCommandScopeChatAdmins: BotCommandScopeChatAdministrators = {
 *   type: "chat_administrators", // Scope type, always "chat_administrators"
 *   chat_id: "@supergroupusername" // Target supergroup identifier or username
 * };
 */
export interface BotCommandScopeChatAdministrators {
  /**
   * The type of the scope. Always set to "chat_administrators" for this scope.
   *
   */
  type: 'chat_administrators'

  /**
   * Unique identifier for the target chat or username of the target supergroup.
   * The chat ID can be either an integer (unique identifier) or a string (the username in the format "@supergroupusername").
   *
   * @example 123456789 // Target chat ID
   * @example "@supergroupusername" // Target supergroup username
   */
  chat_id: number | string
}
