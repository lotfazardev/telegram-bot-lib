import { PhotoSize } from './PhotoSize'

/**
 * Represents a general file (as opposed to photos, voice messages, and audio files).
 */
export interface Document {
  /**
   * Identifier for this file, which can be used to download or reuse the file.
   *
   * @example
   * "BQACAgIAAxkBAAICZGKwqlUe"
   */
  file_id: string

  /**
   * Unique identifier for this file, consistent over time and across bots.
   * Cannot be used to download or reuse the file.
   *
   * @example
   * "AgACAgMAAxkBAAICZGKwe"
   */
  file_unique_id: string

  /**
   * Optional. Document thumbnail as defined by the sender.
   */
  thumbnail?: PhotoSize

  /**
   * Optional. Original filename as defined by the sender.
   *
   * @example
   * "document.pdf"
   */
  file_name?: string

  /**
   * Optional. MIME type of the file as defined by the sender.
   *
   * @example
   * "application/pdf"
   */
  mime_type?: string

  /**
   * Optional. File size in bytes. It can exceed 2^31 but has at most 52 significant bits.
   * Use a signed 64-bit integer or double-precision float type to store this value safely.
   *
   * @example
   * 1048576
   */
  file_size?: number
}
