import Telegram from '@src/Telegram'

describe('🎮 Telegram Game Entity', () => {
  const apiKey = String(process.env.API_KEY)
  const userId = Number(process.env.USER_ID)
  const gameShortName = String(process.env.GAME_SHORT_NAME)
  const telegramClient = new Telegram({ apiKey })

  it('Validates required environment variables.', () => {
    expect(apiKey).toBeDefined()
    expect(apiKey).not.toBe('')
    expect(userId).toBeDefined()
    expect(Number.isNaN(userId)).toBe(false)
    expect(gameShortName).toBeDefined()
    expect(gameShortName).not.toBe('')
  })

  it('Correctly initializes with a valid API key.', () => {
    expect(telegramClient).toBeDefined()
  })

  it('Correctly sends game to user.', async () => {
    const sendGameResualt = await telegramClient.sendGame({
      chat_id: userId,
      game_short_name: gameShortName,
    })
    expect(sendGameResualt.game).toBeDefined()
    expect(sendGameResualt.chat.id).toBe(userId)
  })
})
