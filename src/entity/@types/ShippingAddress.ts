/**
 * This object represents a shipping address.
 */
export interface ShippingAddress {
  /**
   * Two-letter [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code.
   */
  country_code: string

  /**
   * State, if applicable.
   */
  state: string

  /**
   * City of the shipping address.
   */
  city: string

  /**
   * First line of the address (e.g., street name, house number).
   */
  street_line1: string

  /**
   * Second line of the address (e.g., apartment number, building).
   */
  street_line2: string

  /**
   * Postal code for the address.
   */
  post_code: string
}
