import { BackgroundTypeChatTheme } from './BackgroundTypeChatTheme'
import { BackgroundTypeFill } from './BackgroundTypeFill'
import { BackgroundTypePattern } from './BackgroundTypePattern'
import { BackgroundTypeWallpaper } from './BackgroundTypeWallpaper'

/**
 * This object describes the type of a background.
 *
 * The background type defines how the background is applied to a chat, and can be one of the following:
 * - {@link BackgroundTypeFill} for background fills like solid colors or gradients
 * - {@link BackgroundTypeWallpaper} for using a wallpaper (JPEG format)
 * - {@link BackgroundTypePattern} for using a pattern (PNG or TGV format)
 * - {@link BackgroundTypeChatTheme} for using a built-in chat theme
 *
 * @example
 * const backgroundType: BackgroundType = {
 *   type: "fill",
 *   fill: {
 *     type: "solid",
 *     color: 0xFF5733, // RGB24 format for solid color
 *   },
 * };
 */
export type BackgroundType =
  | BackgroundTypeFill
  | BackgroundTypeWallpaper
  | BackgroundTypePattern
  | BackgroundTypeChatTheme
