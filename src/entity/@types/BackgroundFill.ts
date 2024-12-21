import { BackgroundFillFreeformGradient } from './BackgroundFillFreeformGradient'
import { BackgroundFillGradient } from './BackgroundFillGradient'
import { BackgroundFillSolid } from './BackgroundFillSolid'

/**
 * Represents the way a background is filled based on the selected colors.
 *
 * This object can describe one of the following background fill types:
 *
 * - {@link BackgroundFillSolid} - Solid color fill
 * - {@link BackgroundFillGradient} - Gradient color fill
 * - {@link BackgroundFillFreeformGradient} - Freeform gradient fill
 *
 * @example
 * const solidBackground: BackgroundFill = {
 *   type: "solid",
 *   color: 0xFF5733, // RGB24 format for solid color
 * };
 *
 * const gradientBackground: BackgroundFill = {
 *   type: "gradient",
 *   top_color: 0xFF5733,
 *   bottom_color: 0x33FF57,
 *   rotation_angle: 45,
 * };
 *
 * const freeformGradientBackground: BackgroundFill = {
 *   type: "freeform_gradient",
 *   colors: [0xFF5733, 0x33FF57, 0x3357FF],
 * };
 */
export type BackgroundFill =
  | BackgroundFillSolid
  | BackgroundFillGradient
  | BackgroundFillFreeformGradient
