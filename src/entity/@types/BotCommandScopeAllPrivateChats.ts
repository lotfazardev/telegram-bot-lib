/**
 * Represents the scope of bot commands, covering all private chats.
 *
 * This scope allows the bot commands to be applied to all private chats.
 *
 * @example
 * const botCommandScopeAllPrivateChats: BotCommandScopeAllPrivateChats = {
 *   type: "all_private_chats" // Scope type, always "all_private_chats"
 * };
 */
export interface BotCommandScopeAllPrivateChats {
  /**
   * The type of the scope. Always set to "all_private_chats" for this scope.
   *
   */
  type: 'all_private_chats'
}
