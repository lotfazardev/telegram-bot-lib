/**
 * Represents the contents of a file to be uploaded to Telegram.
 *
 * This object must be posted using `multipart/form-data` in the usual way files are uploaded via the browser.
 *
 * Supported types:
 * - `Blob`: A file-like object of immutable, raw data.
 * - `File`: A file from the user's file system.
 * - `ReadableStream<Uint8Array>`: A stream of binary data.
 */
export type InputFile = Blob | File | ReadableStream<Uint8Array>
