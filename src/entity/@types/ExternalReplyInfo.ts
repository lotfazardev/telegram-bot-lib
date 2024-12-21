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

/**
 * Represents information about a reply in an external context,
 * where the reply could contain various types of media, messages, or other elements.
 */
export interface ExternalReplyInfo {
  /**
   * Origin of the message, which could include information such as the sender or the type of message.
   * - {@link MessageOrigin} - Describes the origin details of the message.
   */
  origin: MessageOrigin

  /**
   * Optional. The chat to which the message belongs.
   * - {@link Chat} - Represents the chat the message is associated with.
   */
  chat?: Chat

  /**
   * Optional. Unique identifier for the message.
   * - {@link Message} - Represents the message identified by this ID.
   */
  message_id?: number

  /**
   * Optional. Link preview settings for the reply.
   * - {@link LinkPreviewOptions} - Options for how the link preview should be displayed.
   */
  link_preview_options?: LinkPreviewOptions

  /**
   * Optional. An animation attached to the message.
   * - {@link Animation} - Represents an animation in the message.
   */
  animation?: Animation

  /**
   * Optional. An audio file attached to the message.
   * - {@link Audio} - Represents an audio file in the message.
   */
  audio?: Audio

  /**
   * Optional. A document attached to the message.
   * - {@link Document} - Represents a document in the message.
   */
  document?: Document

  /**
   * Optional. A set of photos attached to the message.
   * - {@link PhotoSize} - Represents photo sizes for the attached photo(s).
   */
  photo?: PhotoSize[]

  /**
   * Optional. A sticker attached to the message.
   * - {@link Sticker} - Represents a sticker in the message.
   */
  sticker?: Sticker

  /**
   * Optional. A story attached to the message.
   * - {@link Story} - Represents a story attached to the message.
   */
  story?: Story

  /**
   * Optional. A video attached to the message.
   * - {@link Video} - Represents a video attached to the message.
   */
  video?: Video

  /**
   * Optional. A video note attached to the message.
   * - {@link VideoNote} - Represents a video note in the message.
   */
  video_note?: VideoNote

  /**
   * Optional. A voice note attached to the message.
   * - {@link Voice} - Represents a voice note in the message.
   */
  voice?: Voice

  /**
   * Optional. Flag indicating whether the message has a media spoiler.
   * - {@link Boolean} - Indicates whether there is a spoiler on the attached media.
   */
  has_media_spoiler?: boolean

  /**
   * Optional. A contact shared with the message.
   * - {@link Contact} - Represents a contact shared in the message.
   */
  contact?: Contact

  /**
   * Optional. A dice roll attached to the message.
   * - {@link Dice} - Represents a dice roll in the message.
   */
  dice?: Dice

  /**
   * Optional. A game attached to the message.
   * - {@link Game} - Represents a game in the message.
   */
  game?: Game

  /**
   * Optional. A giveaway related to the message.
   * - {@link Giveaway} - Represents a giveaway message.
   */
  giveaway?: Giveaway

  /**
   * Optional. Information about the giveaway winners.
   * - {@link GiveawayWinners} - Represents the winners of a giveaway.
   */
  giveaway_winners?: GiveawayWinners

  /**
   * Optional. Invoice information related to the message.
   * - {@link Invoice} - Represents the invoice details.
   */
  invoice?: Invoice

  /**
   * Optional. The location shared in the message.
   * - {@link Location} - Represents a geographical location in the message.
   */
  location?: Location

  /**
   * Optional. A poll attached to the message.
   * - {@link Poll} - Represents a poll attached to the message.
   */
  poll?: Poll

  /**
   * Optional. A venue attached to the message.
   * - {@link Venue} - Represents a venue attached to the message.
   */
  venue?: Venue
}
