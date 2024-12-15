import { ShippingAddress } from './ShippingAddress'
import { User } from './User'

/**
 * This object contains information about an incoming shipping query.
 *
 */
export interface ShippingQuery {
  /**
   * Unique query identifier.
   */
  id: string

  /**
   * User who sent the query.
   */
  from: User

  /**
   * Bot-specified invoice payload.
   */
  invoice_payload: string

  /**
   * User-specified shipping address.
   */
  shipping_address: ShippingAddress
}
