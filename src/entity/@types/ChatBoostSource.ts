import { ChatBoostSourcePremium } from './ChatBoostSourcePremium'
import { ChatBoostSourceGiftCode } from './ChatBoostSourceGiftCode'
import { ChatBoostSourceGiveaway } from './ChatBoostSourceGiveaway'

/**
 * Represents the source of a chat boost. The boost can originate from different sources.
 * The available sources are:
 *
 * @see {@link ChatBoostSourcePremium} for more details on boosts from premium.
 * @see {@link ChatBoostSourceGiftCode} for more details on boosts from gift codes.
 * @see {@link ChatBoostSourceGiveaway} for more details on boosts from giveaways.
 */
export type ChatBoostSource =
  | ChatBoostSourcePremium
  | ChatBoostSourceGiftCode
  | ChatBoostSourceGiveaway
