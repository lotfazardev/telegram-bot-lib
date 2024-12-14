import { PaidMediaPhoto } from './PaidMediaPhoto'
import { PaidMediaPreview } from './PaidMediaPreview'
import { PaidMediaVideo } from './PaidMediaVideo'

/**
 * Represents a paid media object.
 * This can be one of:
 * - {@link PaidMediaPreview} for a preview before payment.
 * - {@link PaidMediaPhoto} for a photo-based media.
 * - {@link PaidMediaVideo} for a video-based media.
 */
export type PaidMedia = PaidMediaPreview | PaidMediaPhoto | PaidMediaVideo
