import { KeyboardButton } from './KeyboardButton'

/**
 * Represents a custom keyboard with reply options.
 *
 * This object allows the creation of a custom keyboard for replying, with various customization options.
 * It is not supported in channels or messages sent on behalf of a Telegram Business account.
 *
 * For more details and examples, see the
 * [Introduction to Bots](https://core.telegram.org/bots/features#keyboards) section in the official documentation.
 *
 * @example
 * const replyKeyboard: ReplyKeyboardMarkup = {
 *   keyboard: [
 *     [{ text: 'Option 1' }, { text: 'Option 2' }],
 *     [{ text: 'Option 3' }]
 *   ],
 *   is_persistent: true,
 *   resize_keyboard: true,
 *   one_time_keyboard: false,
 *   input_field_placeholder: 'Type your message...',
 *   selective: true
 * };
 */
export interface ReplyKeyboardMarkup {
  /**
   * Array of button rows, each represented by an array of {@link KeyboardButton} objects.
   *
   * The buttons will be displayed in a grid-like layout with rows of buttons.
   * Each `KeyboardButton` represents an individual button.
   *
   * @example
   * [
   *   [{ text: 'Option 1' }, { text: 'Option 2' }],
   *   [{ text: 'Option 3' }]
   * ]
   */
  keyboard: KeyboardButton[][]

  /**
   * Optional. Requests clients to always show the keyboard when the regular keyboard is hidden.
   * Defaults to `false`, in which case the custom keyboard can be hidden and opened with a keyboard icon.
   *
   * @optional
   * @default false
   */
  is_persistent?: boolean

  /**
   * Optional. Requests clients to resize the keyboard vertically for optimal fit, e.g., making the keyboard smaller
   * if there are just two rows of buttons. Defaults to `false`, in which case the custom keyboard is always the
   * same height as the app's standard keyboard.
   *
   * @optional
   * @default false
   */
  resize_keyboard?: boolean

  /**
   * Optional. Requests clients to hide the keyboard as soon as it's been used.
   * The keyboard will still be available, but clients will automatically display the usual letter-keyboard in the
   * chat. The user can press a special button in the input field to see the custom keyboard again.
   * Defaults to `false`.
   *
   * @optional
   * @default false
   */
  one_time_keyboard?: boolean

  /**
   * Optional. The placeholder to be shown in the input field when the keyboard is active.
   * The placeholder text can be 1-64 characters long.
   *
   * @optional
   */
  input_field_placeholder?: string

  /**
   * Optional. Use this parameter if you want to show the keyboard to specific users only.
   * Targets: 1) users that are @mentioned in the {@link Message.text} of the {@link Message} object;
   * 2) if the bot's message is a reply to a message in the same chat and forum topic, the sender of the original message.
   *
   * @optional
   */
  selective?: boolean
}
