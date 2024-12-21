import { TransactionPartnerUser } from './TransactionPartnerUser'
import { TransactionPartnerAffiliateProgram } from './TransactionPartnerAffiliateProgram'
import { TransactionPartnerFragment } from './TransactionPartnerFragment'
import { TransactionPartnerTelegramAds } from './TransactionPartnerTelegramAds'
import { TransactionPartnerTelegramApi } from './TransactionPartnerTelegramApi'
import { TransactionPartnerOther } from './TransactionPartnerOther'

/**
 * This object describes the source of a transaction, or its recipient for outgoing transactions.
 * It can be one of:
 * - `TransactionPartnerUser`
 * - `TransactionPartnerAffiliateProgram`
 * - `TransactionPartnerFragment`
 * - `TransactionPartnerTelegramAds`
 * - `TransactionPartnerTelegramApi`
 * - `TransactionPartnerOther`
 */
export type TransactionPartner =
  | TransactionPartnerUser
  | TransactionPartnerAffiliateProgram
  | TransactionPartnerFragment
  | TransactionPartnerTelegramAds
  | TransactionPartnerTelegramApi
  | TransactionPartnerOther
