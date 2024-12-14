import { User } from './User'

/**
 *
 * This object represents one special entity in a text message.
 * Entities can include things like hashtags, usernames, URLs, bot commands, and other types of formatting.
 *
 * Supported entity types include:
 *
 * @see {@link https://core.telegram.org/bots/api#messageentity} for official documentation.
 */
export interface MessageEntity {
  /**
   * The type of the entity. See the documentation for supported types.
   * Example types include "mention", "hashtag", "url", etc.
   */
  type:
    | 'mention'
    | 'hashtag'
    | 'cashtag'
    | 'bot_command'
    | 'url'
    | 'email'
    | 'phone_number'
    | 'bold'
    | 'italic'
    | 'underline'
    | 'strikethrough'
    | 'spoiler'
    | 'blockquote'
    | 'expandable_blockquote'
    | 'code'
    | 'pre'
    | 'text_link'
    | 'text_mention'
    | 'custom_emoji'

  /**
   * The offset (in UTF-16 code units) of the entity's start position in the message text.
   * @see {@link https://www.unicode.org/glossary/#code_unit} for more on code units.
   */
  offset: number

  /**
   * The length (in UTF-16 code units) of the entity.
   */
  length: number

  /**
   * For "text_link" entities only, this is the URL to be opened when the text is tapped.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a} for more about HTML links.
   */
  url?: string

  /**
   * For "text_mention" entities only, this is the mentioned user.
   * @see {@link User} for more about user objects.
   */
  user?: User

  /**
   * For "pre" entities only, this specifies the programming language of the entity text.
   */
  language?: string

  /**
   * For "custom_emoji" entities only, this is the unique identifier of the custom emoji.
   * Use {@link getCustomEmojiStickers} to get full details about the custom emoji.
   */
  custom_emoji_id?: string
}
