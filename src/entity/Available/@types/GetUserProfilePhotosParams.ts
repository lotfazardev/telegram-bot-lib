export interface GetUserProfilePhotosParams {
  /**
   * Unique identifier of the target user.
   */
  user_id: number

  /**
   * Sequential number of the first photo to be returned.
   * By default, all photos are returned.
   */
  offset?: number

  /**
   * Limits the number of photos to be retrieved.
   * Accepted values are between 1 and 100. Defaults to 100.
   */
  limit?: number
}
