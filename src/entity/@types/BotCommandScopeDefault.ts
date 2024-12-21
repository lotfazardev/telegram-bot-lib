/**
 * Represents the default scope of bot commands.
 *
 * Default commands are used if no commands with a narrower scope are specified for the user.
 *
 * @example
 * const botCommandScopeDefault: BotCommandScopeDefault = {
 *   type: "default" // Scope type, always "default"
 * };
 */
export interface BotCommandScopeDefault {
  /**
   * The type of the scope. Always set to "default" for this scope.
   *
   */
  type: 'default'
}
