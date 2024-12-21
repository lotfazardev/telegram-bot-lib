/**
 * Describes data required for decrypting and authenticating `EncryptedPassportElement`.
 *
 */
export interface EncryptedCredentials {
  /**
   * Base64-encoded encrypted JSON-serialized data containing unique user's payload,
   * data hashes, and secrets required for {EncryptedPassportElement` decryption and authentication.
   */
  data: string

  /**
   * Base64-encoded data hash for data authentication.
   */
  hash: string

  /**
   * Base64-encoded secret, encrypted with the bot's public RSA key, required for data decryption.
   */
  secret: string
}
