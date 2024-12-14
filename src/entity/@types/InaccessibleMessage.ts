import { Chat } from './Chat'

/**
 * This object represents a message that was deleted or is otherwise inaccessible to the bot.
 *
 * The message can be from a chat that the bot can no longer access, either because it was deleted,
 * the chat was left, or the bot's permissions changed. The `date` field always has a value of 0, which
 * helps differentiate inaccessible messages from regular messages.
 */
export interface InaccessibleMessage {
  /**
   * The chat to which the message belonged.
   *
   * This provides details about the chat where the message originated, such as the chat ID, title, etc.
   * @see {@link Chat} for details on the chat where the message belonged.
   */
  chat: Chat

  /**
   * Unique message identifier inside the chat.
   *
   * This ID helps the bot identify the specific message within the chat.
   */
  message_id: number

  /**
   * Always 0.
   *
   * This field is used to differentiate regular and inaccessible messages. It always holds a value of 0 for inaccessible messages.
   */
  date: number
}
