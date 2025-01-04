import BaseTelegramApiEntity from '@core/BaseTelegramApiEntity'
import { CreateInvoiceLinkParams, SendInvoiceParams } from './@types'
import { Message } from '@entity/@types/Message'

export default class Payment extends BaseTelegramApiEntity {
  /**
   * Use this method to send invoices.
   * On success, the sent Message is returned.
   */
  async sendInvoice(sendInvoiceParams: SendInvoiceParams) {
    return this.jsonCall<Message>('sendInvoice', sendInvoiceParams)
  }

  /**
   * Use this method to create a link for an invoice.
   * On success, the created invoice link as a string is returned.
   */
  async createInvoiceLink(createInvoiceLinkParams: CreateInvoiceLinkParams) {
    return this.jsonCall<string>('createInvoiceLink', createInvoiceLinkParams)
  }
}
