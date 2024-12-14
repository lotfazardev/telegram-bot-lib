import { User } from './User'

/**
 * Represents an invite link for a chat.
 */
export interface ChatInviteLink {
  /**
   * The invite link.
   * If the link was created by another chat administrator, the second part of the link will be replaced with "…".
   *
   * @example
   * "https://t.me/joinchat/Abc123..."
   */
  invite_link: string

  /**
   * The creator of the invite link.
   * See {@link User} for details about the creator.
   */
  creator: User

  /**
   * Indicates whether users joining the chat via this link need to be approved by chat administrators.
   *
   * @example
   * true
   */
  creates_join_request: boolean

  /**
   * Indicates whether the link is the primary invite link for the chat.
   *
   * @example
   * false
   */
  is_primary: boolean

  /**
   * Indicates whether the link is revoked.
   *
   * @example
   * true
   */
  is_revoked: boolean

  /**
   * The name of the invite link.
   * Optional.
   *
   * @example
   * "Special Invite"
   */
  name?: string

  /**
   * The point in time (Unix timestamp) when the link will expire or has expired.
   * Optional.
   *
   * @example
   * 1672531199
   */
  expire_date?: number

  /**
   * The maximum number of users that can be members of the chat simultaneously after joining the chat via this invite link.
   * Optional. The value can range from 1 to 99999.
   *
   * @example
   * 100
   */
  member_limit?: number

  /**
   * The number of pending join requests created using this link.
   * Optional.
   *
   * @example
   * 5
   */
  pending_join_request_count?: number

  /**
   * The number of seconds the subscription will be active for before the next payment.
   * Optional.
   *
   * @example
   * 2592000 // 30 days in seconds
   */
  subscription_period?: number

  /**
   * The amount of Telegram Stars a user must pay initially and after each subsequent subscription period to be a member of the chat using the link.
   * Optional.
   *
   * @example
   * 50
   */
  subscription_price?: number
}
