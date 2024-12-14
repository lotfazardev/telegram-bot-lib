import { ChatMemberAdministrator } from './ChatMemberAdministrator'
import { ChatMemberBanned } from './ChatMemberBanned'
import { ChatMemberLeft } from './ChatMemberLeft'
import { ChatMemberMember } from './ChatMemberMember'
import { ChatMemberOwner } from './ChatMemberOwner'
import { ChatMemberRestricted } from './ChatMemberRestricted'

/**
 * Represents information about one member of a chat.
 *
 * The following types of chat members are supported:
 * - {@link ChatMemberOwner} – The chat member is the chat's owner.
 * - {@link ChatMemberAdministrator} – The chat member is an administrator.
 * - {@link ChatMemberMember} – The chat member is a regular user.
 * - {@link ChatMemberRestricted} – The chat member has restricted permissions.
 * - {@link ChatMemberLeft} – The chat member has left the chat.
 * - {@link ChatMemberBanned} – The chat member is banned from the chat.
 */
export type ChatMember =
  | ChatMemberOwner
  | ChatMemberAdministrator
  | ChatMemberMember
  | ChatMemberRestricted
  | ChatMemberLeft
  | ChatMemberBanned
