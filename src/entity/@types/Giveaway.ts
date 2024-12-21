import { Chat } from './Chat'

/**
 * Represents a message about a scheduled giveaway.
 *
 * This object is received when a giveaway is scheduled in a chat. It contains detailed information about the giveaway, such as the
 * chats to join, the selection date for winners, the number of winners, eligibility criteria, and prize details.
 *
 * @remarks
 * - The `chats` field contains the list of chats that the user must join in order to participate in the giveaway.
 * - The `winners_selection_date` field specifies the time when the giveaway winners will be selected (in Unix timestamp format).
 * - Optional fields include eligibility filters like `only_new_members`, visibility of the winners list (`has_public_winners`),
 *   prize descriptions, and country restrictions (`country_codes`).
 *
 * @example
 * ```typescript
 * const giveaway: Giveaway = {
 *   chats: [
 *     { id: 123456, title: 'Chat 1', type: 'public' },
 *     { id: 7891011, title: 'Chat 2', type: 'private' }
 *   ],
 *   winners_selection_date: 1672531199, // Unix timestamp for the selection time
 *   winner_count: 3,
 *   only_new_members: true,
 *   has_public_winners: false,
 *   prize_description: "A free premium subscription for 3 months",
 *   country_codes: ['US', 'DE'], // Only users from the US and Germany are eligible
 *   premium_subscription_month_count: 3 // The winner will get a 3-month Telegram Premium subscription
 * };
 * ```
 * This example shows how to set up a giveaway with two chat groups, with eligibility for new members only, and prizes for winners.
 *
 * @see [Giveaway Documentation](https://core.telegram.org/bots/api#giveaway)
 */
export interface Giveaway {
  /**
   * The list of chats the user must join to participate in the giveaway.
   *
   * @example
   * [
   *   { id: 123456, title: 'Chat 1', type: 'public' },
   *   { id: 7891011, title: 'Chat 2', type: 'private' }
   * ]
   * Array of `Chat` objects representing the chats the user must join to be eligible for the giveaway.
   */
  chats: Chat[]

  /**
   * The point in time (Unix timestamp) when the winners of the giveaway will be selected.
   *
   * @example
   * 1672531199 // Unix timestamp for the winners selection date
   */
  winners_selection_date: number

  /**
   * The number of users to be selected as winners of the giveaway.
   *
   * @example
   * 3 // Three winners will be selected
   */
  winner_count: number

  /**
   * Optional. If true, only users who join the chats after the giveaway started are eligible to win.
   *
   * @example
   * true // Only new members are eligible for the giveaway
   */
  only_new_members?: true

  /**
   * Optional. If true, the list of giveaway winners will be visible to everyone.
   *
   * @example
   * true // Winners' names will be visible to everyone
   */
  has_public_winners?: true

  /**
   * Optional. A description of the additional giveaway prize.
   *
   * @example
   * "A free premium subscription for 3 months" // Prize description
   */
  prize_description?: string

  /**
   * Optional. A list of ISO 3166-1 alpha-2 country codes indicating the eligible countries for the giveaway.
   * If empty, users from all countries can participate. Users with a phone number bought on Fragment can always participate.
   *
   * @example
   * ['US', 'DE'] // Users from the US and Germany are eligible
   */
  country_codes?: string[]

  /**
   * Optional. The number of Telegram Stars to be split between the giveaway winners.
   * This is only relevant for Telegram Star giveaways.
   *
   * @example
   * 100 // 100 Telegram Stars to be split among the winners
   */
  prize_star_count?: number

  /**
   * Optional. The number of months the Telegram Premium subscription won from the giveaway will be active for.
   * This is only relevant for Telegram Premium giveaways.
   *
   * @example
   * 3 // The winner will receive a 3-month Telegram Premium subscription
   */
  premium_subscription_month_count?: number
}
