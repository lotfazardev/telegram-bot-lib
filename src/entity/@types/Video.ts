import { PhotoSize } from './PhotoSize'

/**
 * Represents a video file.
 */
export interface Video {
  /**
   * Identifier for this file, which can be used to download or reuse the file.
   *
   * @example
   * "BAACAgIAAxkBAAIBk2R4XtOcJlm5dV"
   */
  file_id: string

  /**
   * Unique identifier for this file, which remains the same over time and across different bots.
   * Cannot be used to download or reuse the file.
   *
   * @example
   * "AgACAgMAAxkBAAIBkmUJAIBBmTtXY"
   */
  file_unique_id: string

  /**
   * Video width as defined by the sender.
   *
   * @example
   * 1920
   */
  width: number

  /**
   * Video height as defined by the sender.
   *
   * @example
   * 1080
   */
  height: number

  /**
   * Duration of the video in seconds as defined by the sender.
   *
   * @example
   * 60
   */
  duration: number

  /**
   * Optional. Video thumbnail.
   * -@see {@link PhotoSize}
   */
  thumbnail?: PhotoSize

  /**
   * Optional. Original filename as defined by the sender.
   *
   * @example
   * "video.mp4"
   */
  file_name?: string

  /**
   * Optional. MIME type of the file as defined by the sender.
   *
   * @example
   * "video/mp4"
   */
  mime_type?: string

  /**
   * Optional. File size in bytes. It can exceed 2^31, but has at most 52 significant bits.
   * Use a signed 64-bit integer or double-precision float type to store this value safely.
   *
   * @example
   * 10485760
   */
  file_size?: number
}
