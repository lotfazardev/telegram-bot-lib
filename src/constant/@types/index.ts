/**
 * Represents a fixed Telegram profile accent color.
 *
 * @property {string[]} lightColors - The list of light mode RGB colors associated with this profile.
 * @property {string[]} darkColors - The list of dark mode RGB colors associated with this profile.
 */
export type FixedTelegramColor = {
  lightColors: string[]
  darkColors: string[]
}

/**
 * Represents a customizable Telegram color.
 */
export type CustomizableTelegramColor =
  | 'red'
  | 'orange'
  | 'purple/violet'
  | 'green'
  | 'cyan'
  | 'blue'
  | 'pink'

/**
 * Represents a Telegram profile accent color, which can either be a fixed set of RGB values for light and dark modes,
 * or a customizable color defined by a specific name.
 *
 * @see {@link FixedTelegramColor} & {@link CustomizableTelegramColor}
 */
export type TelegramColor = FixedTelegramColor | CustomizableTelegramColor
