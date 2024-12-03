import { ChatMemberAdministrator } from './ChatMemberAdministrator'
import { ChatMemberBanned } from './ChatMemberBanned'
import { ChatMemberLeft } from './ChatMemberLeft'
import { ChatMemberMember } from './ChatMemberMember'
import { ChatMemberOwner } from './ChatMemberOwner'
import { ChatMemberRestricted } from './ChatMemberRestricted'

export type ChatMember =
  | ChatMemberOwner
  | ChatMemberAdministrator
  | ChatMemberMember
  | ChatMemberRestricted
  | ChatMemberLeft
  | ChatMemberBanned
