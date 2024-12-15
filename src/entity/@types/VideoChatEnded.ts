/**
 * Represents a service message about a video chat that has ended in the chat.
 *
 * This object is received when a video chat has ended in a chat. It contains information about the duration of the video chat
 * in seconds.
 *
 * @remarks
 * - The `duration` field represents the total duration of the video chat in seconds.
 * - This message is typically sent when a video chat session ends and gives information about how long the chat lasted.
 *
 * @example
 * ```typescript
 * const videoChatEnded: VideoChatEnded = {
 *   duration: 3600 // Duration of the video chat in seconds (1 hour)
 * };
 * ```
 * This example shows a video chat that lasted for 3600 seconds, which is equivalent to 1 hour.
 *
 * @see [VideoChatEnded Documentation](https://core.telegram.org/bots/api#videochatended)
 */
export interface VideoChatEnded {
  /**
   * The duration of the video chat in seconds.
   *
   * @example
   * 3600 // Duration of the video chat in seconds (1 hour)
   */
  duration: number
}
