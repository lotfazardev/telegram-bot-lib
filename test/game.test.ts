import Telegram from '@src/Telegram'

describe('🎮 Telegram Game Entity', () => {
  const apiKey = String(process.env.API_KEY)
  const userId = Number(process.env.USER_ID)
  const gameShortName = String(process.env.GAME_SHORT_NAME)
  const telegramClient = new Telegram({ apiKey })
  let messageId = 0
  const gameScore = Math.floor(Math.random() * 10000)

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
    const sendGameResult = await telegramClient.sendGame({
      chat_id: userId,
      game_short_name: gameShortName,
    })
    messageId = sendGameResult.message_id
    expect(sendGameResult.game).toBeDefined()
    expect(sendGameResult.chat.id).toBe(userId)
  })

  it('Correctly sets score for user.', async () => {
    const setGameScoreResult = await telegramClient.setGameScore({
      chat_id: userId,
      user_id: userId,
      score: gameScore,
      force: true,
      message_id: messageId,
    })
    expect(setGameScoreResult).toBeDefined()
  })

  it('Correctly get score of user.', async () => {
    const getGameHighScoresResult = await telegramClient.getGameHighScores({
      chat_id: userId,
      user_id: userId,
      message_id: messageId,
    })
    expect(getGameHighScoresResult[0]?.score).toBe(gameScore)
  })
})
