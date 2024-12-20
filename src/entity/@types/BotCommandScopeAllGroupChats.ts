/**
 * Represents the scope of bot commands, covering all group and supergroup chats.
 *
 * This scope allows the bot commands to be applied to all group and supergroup chats.
 *
 * @example
 * const botCommandScopeAllGroupChats: BotCommandScopeAllGroupChats = {
 *   type: "all_group_chats" // Scope type, always "all_group_chats"
 * };
 */
export interface BotCommandScopeAllGroupChats {
  /**
   * The type of the scope. Always set to "all_group_chats" for this scope.
   *
   */
  type: 'all_group_chats'
}
