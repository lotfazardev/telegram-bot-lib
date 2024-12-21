/**
 * Represents a state where the revenue withdrawal has successfully completed.
 *
 */
export interface RevenueWithdrawalStateSucceeded {
  /**
   * Type of the state, always “succeeded”.
   */
  type: 'succeeded'

  /**
   * Date the withdrawal was completed in Unix time.
   */
  date: number

  /**
   * An HTTPS URL that can be used to see transaction details.
   */
  url: string
}
