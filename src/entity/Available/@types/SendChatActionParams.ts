export interface SendChatActionParams {
  /**
   * Unique identifier of the business connection on behalf of which the action will be sent.
   */
  business_connection_id?: string

  /**
   * Unique identifier for the target chat or username of the target channel (in the format @channelusername).
   */
  chat_id: number | string

  /**
   * Unique identifier for the target message thread; for supergroups only.
   */
  message_thread_id?: number

  /**
   * Type of action to broadcast.
   * - `typing` for text messages.
   * - `upload_photo` for photos.
   * - `record_video` or `upload_video` for videos.
   * - `record_voice` or `upload_voice` for voice notes.
   * - `upload_document` for general files.
   * - `choose_sticker` for stickers.
   * - `find_location` for location data.
   * - `record_video_note` or `upload_video_note` for video notes.
   */
  action:
    | 'typing'
    | 'upload_photo'
    | 'record_video'
    | 'upload_video'
    | 'record_voice'
    | 'upload_voice'
    | 'upload_document'
    | 'choose_sticker'
    | 'find_location'
    | 'record_video_note'
    | 'upload_video_note'
}
