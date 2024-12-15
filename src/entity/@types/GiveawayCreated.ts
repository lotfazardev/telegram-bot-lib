/**
 * Represents a service message about the creation of a scheduled giveaway.
 *
 * This object is received when a giveaway is created and scheduled in the chat. It contains information about the prize for the giveaway.
 *
 * @remarks
 * - The `prize_star_count` field (if provided) indicates the number of Telegram Stars that will be split among the giveaway winners.
 *   This is specific to giveaways that involve Telegram Stars as prizes.
 *
 * @example
 * ```typescript
 * const giveawayCreated: GiveawayCreated = {
 *   prize_star_count: 50 // 50 Telegram Stars for the giveaway
 * };
 * ```
 * This example shows a giveaway where 50 Telegram Stars will be split among the winners.
 *
 * @see [GiveawayCreated Documentation](https://core.telegram.org/bots/api#giveawaycreated)
 */
export interface GiveawayCreated {
  /**
   * The number of Telegram Stars to be split among giveaway winners.
   * This field is only relevant for Telegram Star giveaways.
   *
   * @example
   * 50 // 50 Telegram Stars for the giveaway
   */
  prize_star_count?: number
}
