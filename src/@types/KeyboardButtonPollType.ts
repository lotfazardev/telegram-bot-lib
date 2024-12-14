/**
 * Represents the type of a poll that can be created and sent when the corresponding button is pressed.
 *
 * The user can specify the type of poll they are allowed to create. If no type is specified, they can create a poll of any type.
 *
 * @example
 * const pollType: KeyboardButtonPollType = {
 *   type: "quiz"
 * };
 */
export interface KeyboardButtonPollType {
  /**
   * Optional. Specifies the type of poll the user will be allowed to create.
   *
   * If `"quiz"` is passed, the user will be allowed to create only polls in the quiz mode.
   * If `"regular"` is passed, only regular polls will be allowed.
   * If not specified, the user will be allowed to create a poll of any type.
   *
   * @optional
   * @default undefined
   *
   * @example "quiz"
   * @example "regular"
   */
  type?: 'quiz' | 'regular'
}
