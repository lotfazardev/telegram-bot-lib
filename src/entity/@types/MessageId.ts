/**
 * Represents a unique message identifier.
 */
export interface MessageId {
  /**
   * Unique message identifier.
   *
   * In specific instances (e.g., when a message containing a video is sent to a large chat),
   * the server might automatically schedule the message instead of sending it immediately.
   * In such cases:
   * - This field will be set to `0`.
   * - The relevant message will be unusable until it is actually sent.
   */
  message_id: number
}
