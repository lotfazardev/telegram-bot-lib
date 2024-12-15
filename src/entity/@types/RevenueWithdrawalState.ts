import { RevenueWithdrawalStatePending } from './RevenueWithdrawalStatePending'
import { RevenueWithdrawalStateSucceeded } from './RevenueWithdrawalStateSucceeded'
import { RevenueWithdrawalStateFailed } from './RevenueWithdrawalStateFailed'

/**
 * Describes the state of a revenue withdrawal operation.
 * It can be one of the following:
 * - `RevenueWithdrawalStatePending`
 * - `RevenueWithdrawalStateSucceeded`
 * - `RevenueWithdrawalStateFailed`
 */
export type RevenueWithdrawalState =
  | RevenueWithdrawalStatePending
  | RevenueWithdrawalStateSucceeded
  | RevenueWithdrawalStateFailed
