import Telegram from '@src/Telegram'

describe('🎮 Telegram Passport Entity', () => {
  const apiKey = String(process.env.API_KEY)
  const userId = Number(process.env.USER_ID)
  const sampleFileHash = String(process.env.FILE_HASH)
  const telegramClient = new Telegram({ apiKey })

  it('Validates required environment variables.', () => {
    expect(apiKey).toBeDefined()
    expect(apiKey).not.toBe('')
    expect(sampleFileHash).not.toBe('')
    expect(userId).toBeDefined()
    expect(Number.isNaN(userId)).toBe(false)
  })

  it('Correctly initializes with a valid API key.', () => {
    expect(telegramClient).toBeDefined()
  })

  it('Correctly throw error to user.', async () => {
    const result = await telegramClient.setPassportDataErrors({
      user_id: userId,
      errors: [
        {
          source: 'file',
          type: 'bank_statement',
          file_hash: sampleFileHash,
          message: 'Invalid bank statement photo.',
        },
      ],
    })
    expect(result).toBe(true)
  })
})
