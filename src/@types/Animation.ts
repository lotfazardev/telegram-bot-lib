import { PhotoSize } from './PhotoSize'

/**
 * This object represents an animation file (GIF or H.264/MPEG-4 AVC video without sound).
 */
export interface Animation {
  /**
   * Identifier for this file, which can be used to download or reuse the file.
   */
  file_id: string

  /**
   * Unique identifier for this file, which is supposed to be the same over time and for different bots.
   * Can't be used to download or reuse the file.
   */
  file_unique_id: string

  /**
   * Video width as defined by the sender.
   */
  width: number

  /**
   * Video height as defined by the sender.
   */
  height: number

  /**
   * Duration of the video in seconds as defined by the sender.
   */
  duration: number

  /**
   * Optional. Animation thumbnail as defined by the sender.
   * -@see {@link PhotoSize}
   */
  thumbnail?: PhotoSize

  /**
   * Optional. Original animation filename as defined by the sender.
   */
  file_name?: string

  /**
   * Optional. MIME type of the file as defined by the sender.
   */
  mime_type?: string

  /**
   * Optional. File size in bytes. It can be larger than 2^31 and some programming languages may
   * have difficulty/silent defects in interpreting it. It has at most 52 significant bits, so
   * a signed 64-bit integer or double-precision float type are safe for storing this value.
   */
  file_size?: number
}
