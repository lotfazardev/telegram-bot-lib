import { PassportFile } from './PassportFile'

export interface EncryptedPassportElement {
  type: string
  data?: string
  phone_number?: string
  email?: string
  files?: PassportFile[]
  front_side?: PassportFile
  reverse_side?: PassportFile
  selfie?: PassportFile
  translation?: PassportFile[]
  hash: string
}
