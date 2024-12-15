import { ChatBoostSource } from './ChatBoostSource'

/**
 * Represents information about a chat boost.
 *
 * A chat boost is a temporary promotion to increase the visibility or engagement of a chat.
 * This object contains details about the boost such as the unique identifier, timestamps, and
 * the source of the boost.
 *
 * @see {@link ChatBoostSource} - The source of the chat boost (e.g., premium subscription, gift code).
 */
export interface ChatBoost {
  /**
   * The unique identifier of the boost.
   */
  boost_id: string

  /**
   * The timestamp (Unix time) when the chat was boosted.
   * Represents the exact moment the boost was applied.
   */
  add_date: number

  /**
   * The timestamp (Unix time) when the boost will automatically expire.
   * The boost expires unless the booster’s Telegram Premium subscription is extended.
   */
  expiration_date: number

  /**
   * The source of the added boost.
   *
   * @see {@link ChatBoostSource} for details about how the boost was obtained.
   */
  source: ChatBoostSource
}
