/**
 * Describes a service message about a change in auto-delete timer settings.
 * - {@link https://core.telegram.org/bots/api#service-messages | Service Messages Documentation}
 */
export interface MessageAutoDeleteTimerChanged {
  /**
   * The new auto-delete time for messages in the chat, in seconds.
   * - {@link Number} - The duration in seconds before messages are automatically deleted in the chat.
   */
  message_auto_delete_time: number
}
