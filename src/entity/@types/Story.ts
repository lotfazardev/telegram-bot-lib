import { Chat } from './Chat'

/**
 * This object represents a story.
 */
export interface Story {
  /**
   * Chat that posted the story.
   * -@see {@link Chat}
   */
  chat: Chat

  /**
   * Unique identifier for the story in the chat.
   */
  id: number
}
