import { SendFile } from './SendFile'

/**
 * Represents a paid media photo to send.
 */
export interface InputPaidMediaPhoto {
  /**
   * Type of the media, must be "photo".
   */
  type: 'photo'

  /**
   * File to send.
   * - Pass a `file_id` to send a file that exists on the Telegram servers (recommended).
   * - Pass an HTTP URL for Telegram to get a file from the Internet.
   * - Pass `attach://<file_attach_name>` to upload a new one using multipart/form-data under `<file_attach_name>` name.
   *
   * More information on Sending Files: https://core.telegram.org/bots/api#sending-files
   */
  media: SendFile
}
