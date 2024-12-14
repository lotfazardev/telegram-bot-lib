import { SendFile } from './SendFile'

/**
 * Represents a paid media video to be sent.
 */
export interface InputPaidMediaVideo {
  /**
   * Type of the media, must be "video".
   */
  type: 'video'

  /**
   * File to send.
   * - Pass a `file_id` to send a file that exists on the Telegram servers (recommended).
   * - Pass an HTTP URL for Telegram to get a file from the Internet.
   * - Pass `"attach://<file_attach_name>"` to upload a new one using `multipart/form-data` under `<file_attach_name>` name.
   *
   *   * -@see {@link SendingFiles}
   */
  media: SendFile

  /**
   * Optional. Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side.
   * - Should be in JPEG format and less than 200 kB in size.
   * - Width and height should not exceed 320.
   * - Ignored if the file is not uploaded using `multipart/form-data`.
   *
   * Thumbnails can't be reused and can only be uploaded as a new file.
   * Use `"attach://<file_attach_name>"` if the thumbnail was uploaded using `multipart/form-data` under `<file_attach_name>`.
   *
   *   * -@see {@link SendingFiles}
   */
  thumbnail?: SendFile

  /**
   * Optional. Video width.
   */
  width?: number

  /**
   * Optional. Video height.
   */
  height?: number

  /**
   * Optional. Video duration in seconds.
   */
  duration?: number

  /**
   * Optional. Pass `true` if the uploaded video is suitable for streaming.
   */
  supports_streaming?: boolean
}
