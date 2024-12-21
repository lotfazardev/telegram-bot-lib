import { User } from './User'

/**
 * Represents a service message about new members invited to a video chat.
 *
 * This object is received when new members are invited to join a video chat in a chat. It contains a list of users who have been
 * invited to participate in the video chat.
 *
 * @remarks
 * - The `users` field is an array of `User` objects, each representing a new member who was invited to the video chat.
 * - This message is typically sent when users are invited to a video chat session.
 *
 * @example
 * ```typescript
 * const videoChatParticipantsInvited: VideoChatParticipantsInvited = {
 *   users: [
 *     { id: 123, first_name: 'John', last_name: 'Doe' },
 *     { id: 456, first_name: 'Jane', last_name: 'Doe' }
 *   ]
 * };
 * ```
 * This example shows a message with two new participants invited to the video chat. Each participant is represented by a `User` object.
 *
 * @see [VideoChatParticipantsInvited Documentation](https://core.telegram.org/bots/api#videochatparticipantsinvited)
 */
export interface VideoChatParticipantsInvited {
  /**
   * The new members that were invited to the video chat.
   *
   * @example
   * [
   *   { id: 123, first_name: 'John', last_name: 'Doe' },
   *   { id: 456, first_name: 'Jane', last_name: 'Doe' }
   * ]
   * Array of `User` objects representing the invited participants.
   */
  users: User[]
}
