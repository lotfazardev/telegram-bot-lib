/**
 * Represents a voice note.
 */
export interface Voice {
  /**
   * Identifier for this file, which can be used to download or reuse the file.
   *
   * @example
   * "AwACAgQAAxkBAAIBWmQJGK6kX9IdE"
   */
  file_id: string

  /**
   * Unique identifier for this file, which remains the same over time and across different bots.
   * Cannot be used to download or reuse the file.
   *
   * @example
   * "AgQXZGJFY29Rd3J5SkU"
   */
  file_unique_id: string

  /**
   * Duration of the audio in seconds, as defined by the sender.
   *
   * @example
   * 120
   */
  duration: number

  /**
   * MIME type of the file, as defined by the sender.
   *
   * @example
   * "audio/ogg"
   */
  mime_type?: string

  /**
   * File size in bytes. It can be larger than 2^31, so ensure your system can handle big values.
   * It has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe.
   *
   * @example
   * 1048576
   */
  file_size?: number
}
