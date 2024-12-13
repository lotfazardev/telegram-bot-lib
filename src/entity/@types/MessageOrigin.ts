import { MessageOriginChannel } from './MessageOriginChannel'
import { MessageOriginChat } from './MessageOriginChat'
import { MessageOriginHiddenUser } from './MessageOriginHiddenUser'
import { MessageOriginUser } from './MessageOriginUser'

export type MessageOrigin =
  | MessageOriginUser
  | MessageOriginHiddenUser
  | MessageOriginChat
  | MessageOriginChannel
