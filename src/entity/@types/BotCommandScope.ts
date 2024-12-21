import { BotCommandScopeAllChatAdministrators } from './BotCommandScopeAllChatAdministrators'
import { BotCommandScopeAllGroupChats } from './BotCommandScopeAllGroupChats'
import { BotCommandScopeAllPrivateChats } from './BotCommandScopeAllPrivateChats'
import { BotCommandScopeChat } from './BotCommandScopeChat'
import { BotCommandScopeChatAdministrators } from './BotCommandScopeChatAdministrators'
import { BotCommandScopeChatMember } from './BotCommandScopeChatMember'
import { BotCommandScopeDefault } from './BotCommandScopeDefault'

/**
 * Represents the scope to which bot commands are applied.
 *
 * This object defines the scope for which a bot command is active. There are currently 7 supported scopes:
 *
 * @see {@link BotCommandScopeDefault} for the default scope
 * @see {@link BotCommandScopeAllPrivateChats} for private chat scope
 * @see {@link BotCommandScopeAllGroupChats} for group chat scope
 * @see {@link BotCommandScopeAllChatAdministrators} for admin scope in all chats
 * @see {@link BotCommandScopeChat} for specific chat scope
 * @see {@link BotCommandScopeChatAdministrators} for specific chat administrator scope
 * @see {@link BotCommandScopeChatMember} for specific chat member scope
 *
 * @example
 * const botCommandScope: BotCommandScope = {
 *   type: "all_private_chats" // Specifies the scope to all private chats
 * };
 */
export type BotCommandScope =
  | BotCommandScopeDefault
  | BotCommandScopeAllPrivateChats
  | BotCommandScopeAllGroupChats
  | BotCommandScopeAllChatAdministrators
  | BotCommandScopeChat
  | BotCommandScopeChatAdministrators
  | BotCommandScopeChatMember
