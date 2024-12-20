import { InputMediaAnimation } from './InputMediaAnimation'
import { InputMediaDocument } from './InputMediaDocument'
import { InputMediaAudio } from './InputMediaAudio'
import { InputMediaPhoto } from './InputMediaPhoto'
import { InputMediaVideo } from './InputMediaVideo'

/**
 * This object represents the content of a media message to be sent.
 * It should be one of the following:
 * - InputMediaAnimation
 * - InputMediaDocument
 * - InputMediaAudio
 * - InputMediaPhoto
 * - InputMediaVideo
 */
export type InputMedia =
  | InputMediaAnimation
  | InputMediaDocument
  | InputMediaAudio
  | InputMediaPhoto
  | InputMediaVideo
