/**
 * Represents a chat photo with both small and big versions.
 */
export interface ChatPhoto {
  /**
   * File identifier of the small (160x160) chat photo.
   * This `file_id` can be used only for photo download and only for as long as the photo is not changed.
   *
   * @example
   * "Abc123SmallFileID"
   */
  small_file_id: string

  /**
   * Unique file identifier of the small (160x160) chat photo.
   * This `file_unique_id` is consistent over time and across different bots.
   * It cannot be used to download or reuse the file.
   *
   * @example
   * "UniqueSmallID123"
   */
  small_file_unique_id: string

  /**
   * File identifier of the big (640x640) chat photo.
   * This `file_id` can be used only for photo download and only for as long as the photo is not changed.
   *
   * @example
   * "Abc123BigFileID"
   */
  big_file_id: string

  /**
   * Unique file identifier of the big (640x640) chat photo.
   * This `file_unique_id` is consistent over time and across different bots.
   * It cannot be used to download or reuse the file.
   *
   * @example
   * "UniqueBigID123"
   */
  big_file_unique_id: string
}
