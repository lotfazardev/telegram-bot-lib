import { InlineKeyboardButton } from './InlineKeyboardButton'

/**
 * Represents an inline keyboard that appears right next to the message it belongs to.
 * Inline keyboards are used for interactive buttons that appear directly below the message, allowing users to
 * interact without sending additional messages.
 *
 */
export interface InlineKeyboardMarkup {
  /**
   * An array of button rows, each represented by an array of {@link InlineKeyboardButton} objects.
   * Each row contains inline buttons that can trigger actions like sending callback queries or opening URLs.
   *
   * @example
   * [
   *   [
   *     { text: "Button 1", callback_data: "action_1" },
   *     { text: "Button 2", callback_data: "action_2" }
   *   ]
   * ]
   */
  inline_keyboard: InlineKeyboardButton[][]
}
