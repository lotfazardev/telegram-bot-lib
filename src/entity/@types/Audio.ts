import { PhotoSize } from './PhotoSize'

/**
 * Represents an audio file to be treated as music by the Telegram clients.
 */
export interface Audio {
  /**
   * Identifier for this file, which can be used to download or reuse the file.
   *
   * @example
   * "BQACAgQAAxkBAAIBlWR6fN"
   */
  file_id: string

  /**
   * Unique identifier for this file, consistent over time and across bots.
   * Cannot be used to download or reuse the file.
   *
   * @example
   * "AgACAgMAAxkBAAIBmWEQf"
   */
  file_unique_id: string

  /**
   * Duration of the audio in seconds as defined by the sender.
   *
   * @example
   * 180
   */
  duration: number

  /**
   * Optional. Performer of the audio as defined by the sender or audio tags.
   *
   * @example
   * "John Doe"
   */
  performer?: string

  /**
   * Optional. Title of the audio as defined by the sender or audio tags.
   *
   * @example
   * "My Song"
   */
  title?: string

  /**
   * Optional. Original filename as defined by the sender.
   *
   * @example
   * "audio.mp3"
   */
  file_name?: string

  /**
   * Optional. MIME type of the file as defined by the sender.
   *
   * @example
   * "audio/mpeg"
   */
  mime_type?: string

  /**
   * Optional. File size in bytes. It can exceed 2^31 but has at most 52 significant bits.
   * Use a signed 64-bit integer or double-precision float type to store this value safely.
   *
   * @example
   * 5242880
   */
  file_size?: number

  /**
   * Optional. Thumbnail of the album cover to which the music file belongs.
   * -@see {@link PhotoSize}
   */
  thumbnail?: PhotoSize
}
