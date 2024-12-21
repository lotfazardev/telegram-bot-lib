import { RevenueWithdrawalState } from './RevenueWithdrawalState'

/**
 * Describes a withdrawal transaction with Fragment.
 */
export interface TransactionPartnerFragment {
  /**
   * Type of the transaction partner, always "fragment".
   */
  type: 'fragment'

  /**
   * Optional. State of the transaction if the transaction is outgoing.
   */
  withdrawal_state?: RevenueWithdrawalState
}
