import { ChatBoostSourceGiftCode } from './ChatBoostSourceGiftCode'
import { ChatBoostSourceGiveaway } from './ChatBoostSourceGiveaway'
import { ChatBoostSourcePremium } from './ChatBoostSourcePremium'

export type ChatBoostSource =
  | ChatBoostSourcePremium
  | ChatBoostSourceGiftCode
  | ChatBoostSourceGiveaway
