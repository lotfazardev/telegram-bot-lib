import { InlineQueryResultCachedAudio } from './InlineQueryResultCachedAudio'
import { InlineQueryResultCachedDocument } from './InlineQueryResultCachedDocument'
import { InlineQueryResultCachedGif } from './InlineQueryResultCachedGif'
import { InlineQueryResultCachedMpeg4Gif } from './InlineQueryResultCachedMpeg4Gif'
import { InlineQueryResultCachedPhoto } from './InlineQueryResultCachedPhoto'
import { InlineQueryResultCachedSticker } from './InlineQueryResultCachedSticker'
import { InlineQueryResultCachedVideo } from './InlineQueryResultCachedVideo'
import { InlineQueryResultCachedVoice } from './InlineQueryResultCachedVoice'
import { InlineQueryResultArticle } from './InlineQueryResultArticle'
import { InlineQueryResultAudio } from './InlineQueryResultAudio'
import { InlineQueryResultContact } from './InlineQueryResultContact'
import { InlineQueryResultGame } from './InlineQueryResultGame'
import { InlineQueryResultDocument } from './InlineQueryResultDocument'
import { InlineQueryResultGif } from './InlineQueryResultGif'
import { InlineQueryResultLocation } from './InlineQueryResultLocation'
import { InlineQueryResultMpeg4Gif } from './InlineQueryResultMpeg4Gif'
import { InlineQueryResultPhoto } from './InlineQueryResultPhoto'
import { InlineQueryResultVenue } from './InlineQueryResultVenue'
import { InlineQueryResultVideo } from './InlineQueryResultVideo'
import { InlineQueryResultVoice } from './InlineQueryResultVoice'

/**
 * Represents one result of an inline query.
 * Telegram clients currently support results of the following 20 types:
 */
export type InlineQueryResult =
  | InlineQueryResultCachedAudio
  | InlineQueryResultCachedDocument
  | InlineQueryResultCachedGif
  | InlineQueryResultCachedMpeg4Gif
  | InlineQueryResultCachedPhoto
  | InlineQueryResultCachedSticker
  | InlineQueryResultCachedVideo
  | InlineQueryResultCachedVoice
  | InlineQueryResultArticle
  | InlineQueryResultAudio
  | InlineQueryResultContact
  | InlineQueryResultGame
  | InlineQueryResultDocument
  | InlineQueryResultGif
  | InlineQueryResultLocation
  | InlineQueryResultMpeg4Gif
  | InlineQueryResultPhoto
  | InlineQueryResultVenue
  | InlineQueryResultVideo
  | InlineQueryResultVoice
