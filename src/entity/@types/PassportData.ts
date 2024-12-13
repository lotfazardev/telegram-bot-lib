import { EncryptedCredentials } from './EncryptedCredentials'
import { EncryptedPassportElement } from './EncryptedPassportElement'

export interface PassportData {
  data: EncryptedPassportElement[]
  credentials: EncryptedCredentials
}
