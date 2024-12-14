/**
 * Represents a service message about a video chat scheduled in the chat.
 *
 * This object is received when a video chat is scheduled in a chat. It contains information about the time when the video chat
 * is supposed to be started by a chat administrator. The `start_date` is provided as a Unix timestamp representing the scheduled
 * start time of the video chat.
 *
 * @remarks
 * - The `start_date` field represents the point in time (Unix timestamp) when the video chat is scheduled to start.
 * - The bot can use this information to prepare or notify users about the scheduled video chat.
 *
 * @example
 * ```typescript
 * const videoChatScheduled: VideoChatScheduled = {
 *   start_date: 1635172800 // Scheduled start time in Unix timestamp (2021-10-25 12:00:00 UTC)
 * };
 * ```
 * This example shows a scheduled video chat starting at the Unix timestamp `1635172800`, which corresponds to `2021-10-25 12:00:00 UTC`.
 *
 * @see [VideoChatScheduled Documentation](https://core.telegram.org/bots/api#videochatscheduled)
 */
export interface VideoChatScheduled {
  /**
   * The point in time (Unix timestamp) when the video chat is supposed to be started by a chat administrator.
   *
   * @example
   * 1635172800 // Unix timestamp for the start of the video chat (2021-10-25 12:00:00 UTC)
   */
  start_date: number
}
