import { Video } from './Video'

/**
 * Represents a paid media object, specifically of type "video".
 */
export interface PaidMediaVideo {
  /**
   * The type of the paid media. Always has the value "video".
   *
   * @example
   * "video"
   */
  type: 'video'

  /**
   * The video associated with the paid media.
   * The {@link video} objects.
   */
  photo: Video
}
