/**
 * This object represents a phone contact.
 */
export interface Contact {
  /**
   * Contact's phone number.
   */
  phone_number: string

  /**
   * Contact's first name.
   */
  first_name: string

  /**
   * Optional. Contact's last name.
   */
  last_name?: string

  /**
   * Optional. Contact's user identifier in Telegram.
   * - This number may exceed 32 significant bits but will have at most 52 significant bits.
   * - Use a 64-bit integer or double-precision float to store this safely.
   */
  user_id?: number

  /**
   * Optional. Additional data about the contact in the form of a vCard.
   * @see [vCard](https://en.wikipedia.org/wiki/VCard)
   */
  vcard?: string
}
