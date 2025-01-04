import Telegram from '@src/Telegram'

describe('💳 Telegram Payment Entity', () => {
  const apiKey = String(process.env.API_KEY)
  const userId = Number(process.env.USER_ID)
  const providerToken = String(process.env.PAYMENT_PROVIDER_TOKEN)
  const telegramClient = new Telegram({ apiKey })

  it('Validates required environment variables.', () => {
    expect(apiKey).toBeDefined()
    expect(apiKey).not.toBe('')
    expect(providerToken).toBeDefined()
    expect(providerToken).not.toBe('')
    expect(userId).toBeDefined()
    expect(Number.isNaN(userId)).toBe(false)
  })

  it('Correctly initializes with a valid API key.', () => {
    expect(telegramClient).toBeDefined()
  })

  it('Correctly sends invoice to user.', async () => {
    const result = await telegramClient.sendInvoice({
      chat_id: userId,
      title: 'Test Product',
      description: 'This is a test product description.',
      payload: 'test_payload',
      provider_token: providerToken,
      currency: 'USD',
      prices: [{ label: 'Test Item', amount: 5000 }],
    })
    expect(result).toBeDefined()
    expect(result.chat.id).toBe(userId)
    expect(result.invoice).toBeDefined()
    expect(result.invoice?.title).toBe('Test Product')
    expect(result.invoice?.description).toBe('This is a test product description.')
  })

  it('Correctly sends invoice link to user.', async () => {
    const result = await telegramClient.createInvoiceLink({
      title: 'Test Invoice Link',
      description: 'Link to the test invoice.',
      payload: 'test_payload_link',
      provider_token: providerToken,
      currency: 'USD',
      prices: [{ label: 'Test Item', amount: 5000 }],
    })

    expect(result).toBeDefined()
    expect(result).toContain('https://')
  })
})
