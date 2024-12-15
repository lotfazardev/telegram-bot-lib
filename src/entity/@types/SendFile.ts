import { InputFile } from './InputFile'

/**
 * Represents a file to be sent to the Telegram Bot API.
 *
 * There are three ways to send files (photos, stickers, audio, media, etc.):
 *
 * 1. **By file_id:**
 *    - If the file is already stored on the Telegram servers, you can reuse it by passing its `file_id`.
 *    - Notes:
 *      - The file type cannot be changed when resending by `file_id`. For example, a video cannot be sent as a photo.
 *      - Thumbnails cannot be resent.
 *      - Resending a photo by `file_id` sends all its sizes.
 *      - `file_id` is unique for each bot and cannot be transferred between bots.
 *      - A file may have multiple valid `file_id`s for the same bot.
 *
 * 2. **By URL:**
 *    - Provide a public HTTP URL for the file to be downloaded and sent by Telegram.
 *    - Size limits:
 *      - Photos: 5 MB
 *      - Other content: 20 MB
 *    - Notes:
 *      - Ensure the file has the correct MIME type (e.g., `audio/mpeg` for audio).
 *      - In `sendDocument`, sending by URL works only for GIF, PDF, and ZIP files.
 *      - For `sendVoice`, the file must be `audio/ogg` and no larger than 1 MB. Larger voice notes (1-20 MB) will be sent as files.
 *      - Other configurations may work but are not guaranteed.
 *
 * 3. **By uploading the file:**
 *    - Use `multipart/form-data` to upload the file.
 *    - Size limits:
 *      - Photos: 10 MB
 *      - Other files: 50 MB
 */
export type SendFile = string | InputFile
