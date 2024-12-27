import Telegram from '@src/Telegram'

describe('🧙‍♂️ Telegram Class Instantiation', () => {
  it('Throws an error if no API key is provided', () => {
    expect(() => new Telegram({ apiKey: '' })).toThrow()
  })

  it('Correctly with a valid API key', () => {
    const telegram = new Telegram({ apiKey: process.env.API_KEY || '' })
    expect(telegram).toBeDefined()
  })
})
