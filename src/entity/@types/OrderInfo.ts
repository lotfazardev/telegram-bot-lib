import { ShippingAddress } from './ShippingAddress'

/**
 * This object represents information about an order.
 *
 */
export interface OrderInfo {
  /**
   * Optional. User's name.
   */
  name?: string

  /**
   * Optional. User's phone number.
   */
  phone_number?: string

  /**
   * Optional. User's email address.
   */
  email?: string

  /**
   * Optional. User's shipping address.
   */
  shipping_address?: ShippingAddress
}
