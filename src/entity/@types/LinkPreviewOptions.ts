/**
 * Describes the options used for link preview generation.
 *
 * These options allow fine-grained control over the way a link preview is generated for a message.
 * They provide various options such as disabling the preview, customizing the URL, adjusting media size,
 * and controlling the position of the link preview relative to the message text.
 *
 * @remarks
 * - `is_disabled`: Set this to `true` to disable the link preview entirely.
 * - `url`: If provided, this URL will be used for the preview; otherwise, the first URL in the message text is used.
 * - `prefer_small_media`: Set this to `true` to prefer smaller media sizes in the link preview.
 * - `prefer_large_media`: Set this to `true` to prefer larger media sizes in the link preview.
 * - `show_above_text`: Set this to `true` if you want the preview to appear above the message text; otherwise, it will be placed below.
 *
 * @example
 * const linkPreviewOptions: LinkPreviewOptions = {
 *   is_disabled: false,
 *   url: "https://example.com",
 *   prefer_large_media: true,
 *   show_above_text: true
 * };
 * ```
 */
export interface LinkPreviewOptions {
  /**
   * Optional. If true, disables the link preview for the message.
   *
   * @example
   * true // The link preview is disabled
   */
  is_disabled?: boolean

  /**
   * Optional. URL to use for the link preview.
   * If not provided, the first URL found in the message text will be used.
   *
   * @example
   * "https://example.com" // The URL to be used for the preview
   */
  url?: string

  /**
   * Optional. If true, the media in the link preview will be shrunk.
   * Ignored if the URL isn't explicitly specified or media size change isn't supported.
   *
   * @example
   * true // The media will be shrunk if the preview supports it
   */
  prefer_small_media?: boolean

  /**
   * Optional. If true, the media in the link preview will be enlarged.
   * Ignored if the URL isn't explicitly specified or media size change isn't supported.
   *
   * @example
   * true // The media will be enlarged if the preview supports it
   */
  prefer_large_media?: boolean

  /**
   * Optional. If true, the link preview will be displayed above the message text.
   * Otherwise, it will appear below the message text.
   *
   * @example
   * true // The link preview will appear above the message text
   */
  show_above_text?: boolean
}
