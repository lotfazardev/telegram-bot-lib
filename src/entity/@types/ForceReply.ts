/**
 * Represents a reply interface that can be used to force the user to respond to a message.
 *
 * A **poll bot** is an example of where this could be useful. It guides the user through a step-by-step process of answering questions in a poll. When using `ForceReply`, the bot can receive answers even when it only gets replies, commands, and mentions. The reply interface behaves as if the user tapped 'Reply' on the bot's message, simplifying the interaction.
 *
 * @remarks
 * If `selective` is set to `true`, the bot will only receive replies from specific users, such as those mentioned in the message or the sender of a reply to the bot's message.
 *
 * @example
 * ```typescript
 * const forceReply: ForceReply = {
 *   force_reply: true,
 *   input_field_placeholder: "Type your answer here",
 *   selective: true
 * };
 * ```
 * This would display a reply interface with a placeholder text "Type your answer here" and allow only specific users to respond.
 *
 * @see [ForceReply Documentation](https://core.telegram.org/bots/api#forcereply)
 */
export interface ForceReply {
  /**
   * This parameter is required and must be `true`. It tells the Telegram API to force the reply interface for the user.
   */
  force_reply: true

  /**
   * Optional. The placeholder text to show in the input field when the reply interface is active.
   * Must be between 1 and 64 characters.
   *
   * @example
   * "Please enter your answer"
   */
  input_field_placeholder?: string

  /**
   * Optional. If set to `true`, the reply interface will only be shown to specific users:
   * 1) Users who are mentioned in the `text` field of the [Message](#message) object.
   * 2) The sender of the original message if the bot's message is a reply.
   *
   * @example
   * true // Forces reply from mentioned users only.
   */
  selective?: boolean
}
