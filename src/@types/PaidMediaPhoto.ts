import { PhotoSize } from './PhotoSize'

/**
 * Represents a paid media object, specifically of type "photo".
 */
export interface PaidMediaPhoto {
  /**
   * The type of the paid media. Always has the value "photo".
   *
   * @example
   * "photo"
   */
  type: 'photo'

  /**
   * The photo associated with the paid media.
   * An array of {@link PhotoSize} objects.
   */
  photo: PhotoSize[]
}
