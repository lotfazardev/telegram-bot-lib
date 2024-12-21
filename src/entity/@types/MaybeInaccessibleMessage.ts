import { InaccessibleMessage } from './InaccessibleMessage'
import { Message } from './Message'

/**
 * This object describes a message that can be inaccessible to the bot.
 * It can be one of the following:
 *
 * - {@link Message} (a regular message)
 * - {@link InaccessibleMessage} (a message that is inaccessible to the bot)
 *
 * @see {@link Message} for details on a regular message.
 * @see {@link InaccessibleMessage} for details on an inaccessible message.
 * @link https://developer.telegram.org/bots/api#message for the official Telegram Bot API documentation on Message.

 */
export type MaybeInaccessibleMessage = Message | InaccessibleMessage
