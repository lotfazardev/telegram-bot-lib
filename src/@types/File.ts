/**
 * This object represents a file ready to be downloaded.
 * The file can be downloaded via the link:
 * https://api.telegram.org/file/bot<token>/<file_path>.
 *
 * Note: The link is valid for at least 1 hour. When it expires, a new one can be requested using `getFile`.
 */
export interface File {
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
   * Optional. File size in bytes.
   *
   * It can exceed 2^31 bytes. For such large values, use a 64-bit integer or double-precision float type to store the value safely.
   */
  file_size?: number

  /**
   * Optional. File path.
   *
   * Use `https://api.telegram.org/file/bot<token>/<file_path>` to download the file.
   */
  file_path?: string
}
