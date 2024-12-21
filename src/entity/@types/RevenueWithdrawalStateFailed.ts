/**
 * Represents a state where a revenue withdrawal failed and the transaction was refunded.
 */
export interface RevenueWithdrawalStateFailed {
  /**
   * The type of the state, always "failed".
   */
  type: 'failed'
}
