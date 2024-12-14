import { MessageOriginChannel } from './MessageOriginChannel'
import { MessageOriginChat } from './MessageOriginChat'
import { MessageOriginHiddenUser } from './MessageOriginHiddenUser'
import { MessageOriginUser } from './MessageOriginUser'

/**
 * Describes the origin of a message.
 *
 * The origin can be one of the following types:
 * - {@link MessageOriginUser}: Represents a message sent by a regular user.
 * - {@link MessageOriginHiddenUser}: Represents a message sent by a hidden user (e.g., anonymous).
 * - {@link MessageOriginChat}: Represents a message originating from a chat.
 * - {@link MessageOriginChannel}: Represents a message originating from a channel.
 */
export type MessageOrigin =
  | MessageOriginUser
  | MessageOriginHiddenUser
  | MessageOriginChat
  | MessageOriginChannel
