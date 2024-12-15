/**
 * Represents a portion of the price for goods or services.
 *
 */
export interface LabeledPrice {
  /**
   * Portion label.
   */
  label: string

  /**
   * Price of the product in the smallest units of the currency (integer, not float/double).
   * For example, for a price of US$ 1.45, pass amount = 145.
   * Refer to the "exp" parameter in currencies.json for the number of digits past the decimal
   * point for each currency (e.g., 2 for the majority of currencies).
   */
  amount: number
}
