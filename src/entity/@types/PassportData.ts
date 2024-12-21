import { EncryptedCredentials } from './EncryptedCredentials'
import { EncryptedPassportElement } from './EncryptedPassportElement'

/**
 * Describes Telegram Passport data shared with the bot by the user.
 *
 */
export interface PassportData {
  /**
   * Array with information about documents and other Telegram Passport elements
   * that were shared with the bot.
   *
   * @see {@link EncryptedPassportElement}
   */
  data: EncryptedPassportElement[]

  /**
   * Encrypted credentials required to decrypt the data.
   *
   * @see {@link EncryptedCredentials}
   */
  credentials: EncryptedCredentials
}
