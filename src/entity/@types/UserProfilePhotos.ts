import { PhotoSize } from './PhotoSize'

/**
 * Represents a user's profile pictures.
 *
 * This object contains information about the profile photos of a user.
 * It includes the total count of the user's profile pictures, and an array
 * containing the requested photos, each available in up to 4 sizes.
 *
 * @remarks
 * - `total_count`: The total number of profile photos the user has.
 * - `photos`: An array of arrays, where each inner array contains `PhotoSize` objects in different sizes.
 *
 * @example
 * const userProfilePhotos: UserProfilePhotos = {
 *   total_count: 3,
 *   photos: [
 *     [
 *       { file_id: "abc123", width: 100, height: 100, file_size: 1024 },
 *       { file_id: "abc124", width: 200, height: 200, file_size: 2048 },
 *     ],
 *     [
 *       { file_id: "def123", width: 150, height: 150, file_size: 1536 },
 *     ],
 *     // Other profile pictures...
 *   ]
 * };
 */
export interface UserProfilePhotos {
  /**
   * The total number of profile pictures the target user has.
   *
   * @example
   * 3 // The user has 3 profile pictures
   */
  total_count: number

  /**
   * The requested profile pictures, in up to 4 sizes each.
   *
   * Each inner array contains different sizes of the same profile picture.
   *
   * @example
   * [
   *   [
   *     { file_id: "abc123", width: 100, height: 100, file_size: 1024 },
   *     { file_id: "abc124", width: 200, height: 200, file_size: 2048 },
   *   ]
   * ]
   */
  photos: PhotoSize[][]
}
