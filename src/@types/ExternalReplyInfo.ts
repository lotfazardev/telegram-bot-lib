import { Animation } from './Animation'
import { Audio } from './Audio'
import { Chat } from './Chat'
import { Contact } from './Contact'
import { Dice } from './Dice'
import { Document } from './Document'
import { Game } from './Game'
import { Giveaway } from './Giveaway'
import { GiveawayWinners } from './GiveawayWinners'
import { Invoice } from './Invoice'
import { LinkPreviewOptions } from './LinkPreviewOptions'
import { Location } from './Location'
import { MessageOrigin } from './MessageOrigin'
import { PhotoSize } from './PhotoSize'
import { Poll } from './Poll'
import { Sticker } from './Sticker'
import { Story } from './Story'
import { Venue } from './Venue'
import { Video } from './Video'
import { VideoNote } from './VideoNote'
import { Voice } from './Voice'

export interface ExternalReplyInfo {
  origin: MessageOrigin
  chat?: Chat
  message_id?: number
  link_preview_options?: LinkPreviewOptions
  animation?: Animation
  audio?: Audio
  document?: Document
  photo?: PhotoSize[]
  sticker?: Sticker
  story?: Story
  video?: Video
  video_note?: VideoNote
  voice?: Voice
  has_media_spoiler?: boolean
  contact?: Contact
  dice?: Dice
  game?: Game
  giveaway?: Giveaway
  giveaway_winners?: GiveawayWinners
  invoice?: Invoice
  location?: Location
  poll?: Poll
  venue?: Venue
}
