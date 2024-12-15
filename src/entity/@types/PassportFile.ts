/**
 * This object represents a file uploaded to Telegram Passport.
 *
 * All Telegram Passport files are in JPEG format when decrypted and do not exceed 10MB.
 *
 */
export interface PassportFile {
  /**
   * Identifier for this file, which can be used to download or reuse the file.
   *
   * @example "AbCdEf123456"
   */
  file_id: string

  /**
   * Unique identifier for this file, which is supposed to remain the same over time
   * and for different bots. Cannot be used to download or reuse the file.
   *
   * @example "unique-file-id-12345"
   */
  file_unique_id: string

  /**
   * File size in bytes.
   *
   * @example 102400
   */
  file_size: number

  /**
   * Unix time when the file was uploaded.
   *
   * @example 1609459200
   */
  file_date: number
}
