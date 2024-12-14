import { ChatAdministratorRights } from './ChatAdministratorRights'

/**
 * Defines the criteria used to request a suitable chat for a keyboard button.
 *
 * Information about the selected chat will be shared with the bot when the corresponding button is pressed.
 * If appropriate, the bot will be granted the requested rights in the chat.
 *
 * For more details, see [Requesting Chats](https://core.telegram.org/bots/features#chat-and-user-selection).
 *
 * @example
 * const requestChat: KeyboardButtonRequestChat = {
 *   request_id: 456,
 *   chat_is_channel: true,
 *   chat_is_forum: false,
 *   chat_has_username: true,
 *   bot_is_member: true
 * };
 */
export interface KeyboardButtonRequestChat {
  /**
   * Signed 32-bit identifier of the request.
   * This value will be received back in the {@link ChatShared} object when the corresponding button is pressed.
   * The `request_id` must be unique within the message.
   *
   * @example 456
   */
  request_id: number

  /**
   * Pass `true` to request a channel chat, or `false` to request a group or supergroup chat.
   *
   * @example true
   */
  chat_is_channel: boolean

  /**
   * Optional. Pass `true` to request a forum supergroup, or `false` to request a non-forum chat.
   * If not specified, no additional restrictions are applied.
   *
   * @optional
   * @default undefined
   */
  chat_is_forum?: boolean

  /**
   * Optional. Pass `true` to request a supergroup or channel with a username,
   * or `false` to request a chat without a username.
   * If not specified, no additional restrictions are applied.
   *
   * @optional
   * @default undefined
   */
  chat_has_username?: boolean

  /**
   * Optional. Pass `true` to request a chat owned by the user.
   * If not specified, no additional restrictions are applied.
   *
   * @optional
   * @default undefined
   */
  chat_is_created?: boolean

  /**
   * Optional. A JSON-serialized object listing the required administrator rights of the user in the chat.
   * The rights must be a superset of `bot_administrator_rights`. If not specified, no additional restrictions are applied.
   *
   * @optional
   * @see {@link ChatAdministratorRights} for more details.
   */
  user_administrator_rights?: ChatAdministratorRights

  /**
   * Optional. A JSON-serialized object listing the required administrator rights of the bot in the chat.
   * The rights must be a subset of `user_administrator_rights`. If not specified, no additional restrictions are applied.
   *
   * @optional
   * @see {@link ChatAdministratorRights} for more details.
   */
  bot_administrator_rights?: ChatAdministratorRights

  /**
   * Optional. Pass `true` to request a chat with the bot as a member.
   * If not specified, no additional restrictions are applied.
   *
   * @optional
   * @default undefined
   */
  bot_is_member?: boolean

  /**
   * Optional. Pass `true` to request the chat's title.
   *
   * @optional
   * @default false
   */
  request_title?: boolean

  /**
   * Optional. Pass `true` to request the chat's username.
   *
   * @optional
   * @default false
   */
  request_username?: boolean

  /**
   * Optional. Pass `true` to request the chat's photo.
   *
   * @optional
   * @default false
   */
  request_photo?: boolean
}
