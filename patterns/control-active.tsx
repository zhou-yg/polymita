import { matchPatternMatrix } from "tarat-renderer";

/**
 * for components:
 * - Button
 */
export function controlActivePattern (arg: {
  actionType: string,
  disable: boolean,
  selected: boolean,
  active: boolean,
}) {

  return matchPatternMatrix(
    [arg.actionType, arg.disable, arg.selected, arg.active]
  )({
    container: {
      backgroundColor: {
        blue: ['1', true, true, true],
      }
    },
    border: {
      ['border-color']: {
        blue: ['1', true, true, true],
      }
    },
    text: {
      ['font-size']: {
        small: ['1', true, true, true],
      }
    }
  })
}
