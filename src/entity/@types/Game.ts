import { Animation } from './Animation'
import { MessageEntity } from './MessageEntity'
import { PhotoSize } from './PhotoSize'

/**
 * This object represents a game.
 *
 */
export interface Game {
  /**
   * Title of the game.
   *
   * @example "Space Adventure"
   */
  title: string

  /**
   * Description of the game.
   *
   * @example "A thrilling space exploration game!"
   */
  description: string

  /**
   * Photo that will be displayed in the game message in chats.
   *
   * @see {@link PhotoSize}
   */
  photo: PhotoSize[]

  /**
   * Optional. Brief description of the game or high scores included in the game message.
   * Can be automatically edited to include current high scores when setGameScore is called.
   *
   * @example "High score: 1200"
   * @maxLength 4096
   */
  text?: string

  /**
   * Optional. Special entities that appear in text, such as usernames, URLs, bot commands, etc.
   *
   * @see {@link MessageEntity}
   */
  text_entities?: MessageEntity[]

  /**
   * Optional. Animation that will be displayed in the game message in chats.
   *
   * @see {@link Animation}
   */
  animation?: Animation
}
