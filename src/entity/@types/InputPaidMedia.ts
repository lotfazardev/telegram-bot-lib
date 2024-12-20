import { InputPaidMediaPhoto } from './InputPaidMediaPhoto'
import { InputPaidMediaVideo } from './InputPaidMediaVideo'

/**
 * Represents a paid media object to send.
 * Currently, it can be one of:
 * - `InputPaidMediaPhoto`
 * - `InputPaidMediaVideo`
 */
export type InputPaidMedia = InputPaidMediaPhoto | InputPaidMediaVideo
