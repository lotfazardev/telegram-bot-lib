/**
 * Represents the scope of bot commands, covering all group and supergroup chat administrators.
 *
 * This scope allows the bot commands to be applied to all administrators within all group and supergroup chats.
 *
 * @example
 * const botCommandScopeAllChatAdmins: BotCommandScopeAllChatAdministrators = {
 *   type: "all_chat_administrators" // Scope type, always "all_chat_administrators"
 * };
 */
export interface BotCommandScopeAllChatAdministrators {
  /**
   * The type of the scope. Always set to "all_chat_administrators" for this scope.
   *
   */
  type: 'all_chat_administrators'
}
