import BaseTelegramApiEntity from '@core/BaseTelegramApiEntity'
import { SendInvoiceParams } from './@types'
import { Message } from '@entity/@types/Message'

export default class Payment extends BaseTelegramApiEntity {
  /**
   * Use this method to send invoices.
   * On success, the sent Message is returned.
   */
  async sendInvoice(sendInvoiceParams: SendInvoiceParams) {
    return this.jsonCall<Message>('sendInvoice', sendInvoiceParams)
  }
}
