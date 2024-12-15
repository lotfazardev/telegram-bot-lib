/**
 * Represents the scope of bot commands, covering a specific member of a group or supergroup chat.
 *
 * This scope allows the bot commands to be applied specifically to a member within a group or supergroup chat.
 *
 *
 * @example
 * const botCommandScopeChatMember: BotCommandScopeChatMember = {
 *   type: "chat_member", // Scope type, always "chat_member"
 *   chat_id: "@supergroupusername", // Target supergroup chat identifier or username
 *   user_id: 12345 // Unique identifier of the target user
 * };
 */
export interface BotCommandScopeChatMember {
  /**
   * The type of the scope. Always set to "chat_member" for this scope.
   *
   */
  type: 'chat_member'

  /**
   * Unique identifier for the target chat or username of the target supergroup.
   * The chat ID can be either an integer (unique identifier) or a string (the username in the format "@supergroupusername").
   *
   * @example 123456789 // Target chat ID
   * @example "@supergroupusername" // Target supergroup username
   */
  chat_id: number | string

  /**
   * Unique identifier of the target user.
   *
   * @example 12345 // Target user ID
   */
  user_id: number
}
